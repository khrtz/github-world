import React from 'react';
import { Search } from '../components/Search';
import { SubmitButton } from '../components/SubmitButton';
import styles from './styles/AppContainer.css';

export default class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: 'anonymous',
      search: '',
      disabled: true,
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onEnterSearch = this.onEnterSearch.bind(this);
  }

  value = '';

  renderSearchValue() {
  }

  render() {
    const {
      user,
      disabled,
    } = this.state;

    return (
      <div className={styles.container}>
        Hi, {user}!
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
          <div>{this.state.search}の検索結果</div>
        }
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
    this.setState({
      search: this.value,
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
