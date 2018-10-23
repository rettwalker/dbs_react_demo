import React, { Component } from 'react';
import ListView from '../listView'
import DetailView from '../detailView'

const MasterDetailView = (ItemTypeComponent, AddNewComponent, items) => {

    let List = ListView(ItemTypeComponent)

    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                selectedItem: items[0],
                items: items,
                createNew: false
            }
            console.log('hello')
        }
        selectHandler = (id) => {
            this.setState({
                selectedItem: this.state.items[id]
            })
        }

        toggleNewComponent = () => {
            this.setState({ createNew: !this.state.createNew })
        }

        addNewItem = (newItem) => {
            let updatedItems = this.state.items
            updatedItems.push(newItem)
            this.setState({
                items: updatedItems
            })
            this.toggleNewComponent()
        }

        render() {
            return (
                <div className="d-flex flex-row">
                    <div className="w-25">
                        <button className="btn btn-primary btn-block" onClick={this.toggleNewComponent}>Add New</button>
                        {/* <ul className="list-group list-group-flush">
                            {this.props.items.map((item, index) => <li className="list-group-item" onClick={(e) => this.selectHandler((item.id) ? item.id : index)} key={(item.id) ? item.id : index}> <ItemTypeComponent {...item} /></li>)}
                        </ul> */}
                        <List items={this.state.items} selectHandler={this.selectHandler} />
                    </div>
                    <div className="w-75">
                        {this.state.createNew ? <AddNewComponent submitChange={this.addNewItem} /> : <DetailView {...this.state.selectedItem} />}

                    </div>
                </div>
            );
        }
    }
}
export default MasterDetailView