import React from 'react';

// const ListView = (WrappedComponent) => {
//     return class List extends React.Component {
//         constructor(props) {
//             super(props)
//         }
//         render() {
//             return (
//                 <ul className="list-group list-group-flush">
//                     {this.props.items.map((item, index) => <li className="list-group-item" onClick={() => this.props.selectHandler((item.id) ? item.id : index)} key={(item.id) ? item.id : index}> <WrappedComponent {...item} /></li>)}
//                 </ul>)
//         }
//     }
// }


class ListView extends React.Component {
    render() {
        console.log(this.props.componentToRender)
        return (<ul className="list-group list-group-flush" >
            {this.props.items.map((item, index) => <li className="list-group-item" onClick={() => this.props.selectHandler((item.id) ? item.id : index)} key={(item.id) ? item.id : index}> <this.props.componentToRender {...item} /></li>)}
        </ul>)
    }
}
export default ListView 