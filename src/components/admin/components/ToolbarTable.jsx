import React, { Component } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { FormAdd } from '../../admin/layout/FormAdd'
import { SplitButton } from 'primereact/splitbutton';
import { InputText } from 'primereact/inputtext';

export class ToolbarTable extends Component {

    render() {
        const leftContents = (
            <React.Fragment>
                {/* <Button label="New" icon="pi pi-plus" className="p-mr-2" /> */}
                
                <FormAdd/>
                {/* <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
                <i className="pi pi-bars p-toolbar-separator p-mr-2" />
                <SplitButton label="Save" icon="pi pi-check" model={this.items} className="p-button-warning"></SplitButton> */}
            </React.Fragment>
        );

        const rightContents = (
            <React.Fragment>
                

                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText  placeholder="Search" />
                </span>
                <Button icon="pi pi-search" className="p-mr-2" />
                {/* <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
                <Button icon="pi pi-times" className="p-button-danger" /> */}
            </React.Fragment>
        );

        return (
            <div>
                <Toolbar left={leftContents} right={rightContents} />
            </div>
        );
    }
}