import React from 'react';
import { Search } from '../components/Search';
import { SubmitButton } from '../components/SubmitButton';
import styles from './styles/AppContainer.css';
import RepositoryStore from '../stores/repositoryStore';
import { fetchApi, fetchRepo } from '../actions/repositoryAction';

export default class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: 'anonymous',
      search: '',
      disabled: true,
      repositoryList: [],
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onEnterSearch = this.onEnterSearch.bind(this);
  }

  value = '';

  componentDidMount() {
    fetchApi('khrtz');
    RepositoryStore.on('changed', () => {
      this.setState({ repositoryList: RepositoryStore.getRepository() });
    });
  }

  renderSearchResults(v) {
    const el = (
      <div key={v.id}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={v.html_url}
        >
          {v.name}
        </a> ★{v.stargazers_count}
      </div>
    );
    return el;
  }

  render() {
    const {
      disabled,
      repositoryList,
    } = this.state;

    return (
      <div className={styles.container}>
        気になるユーザーを検索しよう！
        <Search
          value={this.value}
          onChangeValue={this.onChangeValue}
          onEnterSearch={this.onEnterSearch}
        />
        <SubmitButton
          onSearch={this.onSearch}
          disabled={disabled}
        />
        {this.state.search &&
          <h2 className={styles['search-header']}>{this.state.search}の検索結果</h2>
        }
        {repositoryList.map(v =>
          this.renderSearchResults(v),
        )}
      </div>
    );
  }

  onChangeValue(e) {
    this.value = e.target.value;
    if (Object.keys(this.value).length === 0) {
      this.setState({
        disabled: true,
      });
    } else {
      this.setState({
        disabled: false,
      });
    }
  }

  onSearch() {
    const searchText = this.value;
    this.setState({
      search: searchText,
    });
    fetchRepo(searchText).then((res) => {
      RepositoryStore.updateRepositoryList(res);
    });
  }

  onEnterSearch(e) {
    const self = this;
    // Enterで検索
    if (e.keyCode === 13) {
      self.onSearch();
    }
  }
}
