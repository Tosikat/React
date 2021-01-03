import React, { PureComponent } from 'react'
// import store from "../store";
// 由于在npm库中 所以不能依赖用户的文件

import {StoreContext} from './context'

export function connect(mapStateToProps, mapDispatchToProps) {
  return function exhanceHOC(WrappeddComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props, context);
        this.state = {
           storeState: mapStateToProps(this.context.getState())
        }
      }

      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          });
        })
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return (
          <WrappeddComponent {...this.props}
                             {...mapStateToProps(this.context.getState())}
                             {...mapDispatchToProps(this.context.dispatch)}>

          </WrappeddComponent>
        )
      }
    }
    EnhanceComponent.contextType = StoreContext;
    return EnhanceComponent;
  }
}
