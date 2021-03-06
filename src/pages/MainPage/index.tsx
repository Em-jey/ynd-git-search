import React from 'react';
import { connect } from 'react-redux';
import SearchBar from 'components/SearchBar';
import GitUsers from 'components/GitUsers';

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
        <header className="my-3">
          <SearchBar/>
        </header>
        <section>
          <GitUsers/>
        </section>
      </div>
    );
  }
}

export default connect<MappedProps, MappedActions>(select, mapActions)(MainPage);
