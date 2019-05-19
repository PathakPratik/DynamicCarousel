import React from 'react';

const withLocalState = (WrappedComponent) => {
  return class extends React.Component {

    constructor(props){
        super(props);
        this.state = { localStorageAvailable: false };
        this.save = this.save.bind(this);
        this.load = this.load.bind(this);
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
       this.checkLocalStorageAvailable();
    }

    checkLocalStorageAvailable() {
      const testKey = 'test';

      try {
          localStorage.setItem(testKey, testKey);
          localStorage.removeItem(testKey);
          this.setState({ localStorageAvailable: true });
      } catch(e) {
          this.setState({ localStorageAvailable: false });
      }
    }

    load(key){
      if (this.state.localStorageAvailable) {
        return localStorage.getItem(key);
      }
      return null;
    }

    save(key, data){
      if (this.state.localStorageAvailable) {
        localStorage.setItem(key, data);
      }
    }

    remove(key){
      if (this.state.localStorageAvailable) {
        localStorage.removeItem(key);
      }
    }

    render() {
      return (
        <WrappedComponent
          loadFromLocal={this.load}
          saveToLocal={this.save}
          removeFromLocal={this.remove}
          {...this.props}
        />
      );
    }
  }
}

export default withLocalState;