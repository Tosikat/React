import React, {PureComponent} from 'react';
import { HomeDiv, TitleH1} from "./HomeStyle";


class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: '#2b2b2b'
    };
  }
  render() {
    return (
      <HomeDiv>
        Home组件
        <TitleH1 className={"head"}>Home标题</TitleH1>
      </HomeDiv>
    );
  }
}

export default Home;
