import React, { Component } from 'react';
import ListView from '../listView'
import FrameworkListItem from '../frameworkListItem'
import DetailView from '../detailView'
import AddFramework from '../addFramework'

class MasterDetailView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedItem: props.items[0],
            items: props.items,
            createNew: false
        }
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
                    <button className="add-new-btn btn btn-primary btn-block" onClick={this.toggleNewComponent}>Add New</button>
                    <ListView items={this.state.items} selectHandler={this.selectHandler} componentToRender={FrameworkListItem} />
                </div>
                <div className="w-75">
                    {this.state.createNew ? <AddFramework submitChange={this.addNewItem} /> : <DetailView {...this.state.selectedItem} />}
                </div>
            </div>
        );
    }
}
export default MasterDetailView