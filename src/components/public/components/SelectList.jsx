import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { BorderAllRounded } from '@mui/icons-material';


export class SelectList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCountry: null

        };

        this.especialidad2 = [
            { name: 'Nutrición', code: 'NY' },
            { name: 'Neurologia', code: 'RM' },
            { name: 'Cirugia General', code: 'LDN' },
            { name: 'Cardiología', code: 'IST' },
            { name: 'Especialidad', code: 'PRS' }
        ];


        this.onCountryChange = this.onCountryChange.bind(this);
    }



    onCountryChange(e) {
        this.setState({ selectedCountry: e.value });
    }

    render() {
        return (
            <div className="dropdown-demo">
                <div className="card">
                    {/* <h5>Basic</h5>
                    <Dropdown value={this.state.selectedCity1} options={this.especialidad} onChange={this.onCityChange} optionLabel="name" placeholder="Selecciona una Especialidad" />

                    <h5>Editable</h5>
                    <Dropdown value={this.state.selectedCity2} options={this.especialidad} onChange={this.onCityChange2} optionLabel="name" editable />

                    <h5>Selecciona</h5> */}                    
                        <Dropdown value={this.state.selectedCountry} options={this.especialidad2} onChange={this.onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Especialidad" style={{borderRadius: 15}}/>                    
                    {/* <Dropdown value={this.state.selectedCountry} options={this.especialidad2} onChange={this.onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Selecciona una Especialidad"
                        valueTemplate={this.selectedCountryTemplate} itemTemplate={this.countryOptionTemplate} /> */}
                </div>
            </div>
        );
    }
}