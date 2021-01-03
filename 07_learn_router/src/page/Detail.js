import React, {PureComponent} from 'react';

export function Product () {
  return (
    <div>
      <ul>
        <li>商品列表1</li>
        <li>商品列表2</li>
        <li>商品列表3</li>
        <li>商品列表4</li>
        <li>商品列表5</li>
      </ul>
    </div>
  )
}

export function Detail3 (props) {
  const info = props.location.state;
  console.log(props);
  return (
    <div>
      <h1>详情页：{info.name}--{info.age}--{info.height} </h1>
    </div>
  )
}

export function Detail2 (props) {
  console.log(props.location)
  return (
    <div>
      <h1>详情: { props.location.search}</h1>
    </div>
  )
}

export class Detail extends PureComponent {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.match)
    return (
      <div>
        <h1>详情：{this.props.match.params.id} </h1>
      </div>
    )
  }
}

