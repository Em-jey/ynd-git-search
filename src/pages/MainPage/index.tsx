import React from 'react';
import { connect } from 'react-redux';
import Counter from 'components/Counter';
import SearchBar from 'components/SearchBar';

const select = (state: any) => ({});
const mapActions = {};

type MappedProps = ReturnType<typeof select>;
type MappedActions = typeof mapActions;

type Props = {} & MappedActions & MappedProps;
type State = {};

class MainPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <SearchBar/>
        Start your web application with React in TypeScript.
        <Counter/>
      </div>
    );
  }
}

export default connect<MappedProps, MappedActions>(select, mapActions)(MainPage);
