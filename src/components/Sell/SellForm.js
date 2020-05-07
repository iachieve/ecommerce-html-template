import React, {Component} from "react";
import Select from "react-dropdown-select";
import ImageUploader from 'react-images-upload';

import '../../scss/tags.scss';

import data from './db/data'
import conditions from "./db/condition";
import genders from './db/gender';
import movementTypes from "./db/movementTypes";
import caseSizes from "./db/caseSizes";
import caseMaterials from "./db/caseMaterials";
import lugs from "./db/lugs";
import brancelets from "./db/bracelets";
import bezels from "./db/bezel";
import colors from "./db/colors";
import crystals from "./db/crystals";
import YesNo from "./db/YesNo";
import thickness from "./db/thicknes";

class SellForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allBrands: [],
            allModelFamilies: [],
            allConditions: [],
            allGenders:[],
            allMovementsTypes:[],
            allCaseSizes:[],
            allCaseMaterials:[],
            allBracelets:[],
            allBezels:[],
            allColors:[],
            allLugs:[],
            allCrystals: [],
            allBoxes: [],
            allPapers: [],
            allManual: [],
            allThickness:[],
            pictures: [],
            brand: null,
            model: null,
            modelNo: null,
            purchaseYear: null
        }
    }

    handleBrandChange = (value) => {
        this.setState(
            {...this.state,
            allModelFamilies: value.modelFamilies,
                brand: value
            });
    };
    onDrop = (pictureFiles, pictureDataURLs) =>{
        this.setState({
            pictures: pictureFiles
        });
    }
    componentDidMount() {
        this.setState(
            {
                ...this.state,
                allBrands: data,
                allGenders: genders,
                allConditions: conditions,
                allMovementsTypes: movementTypes,
                allCaseSizes: caseSizes,
                allCaseMaterials: caseMaterials,
                allLugs: lugs,
                allBracelets: brancelets,
                allBezels: bezels,
                allColor: colors,
                allCrystals: crystals,
                allThickness: thickness,
                allBoxes: YesNo,
                allPapers: YesNo
            })
    }

    render() {
        return (
            <div className='sell-from-container'>
                <h2 className='sell-from-container__title'>Sell Your Watch</h2>
                <div className='controls-container'>
                    <label htmlFor='brand'>Brand/Manufacturer</label>
                    <div className='input-container'>
                        <Select
                            options={this.state.allBrands}
                            labelField='brandName'
                            onChange={values => this.handleBrandChange(values[0])}
                            ValueField='brandId' name='brand'
                            multi={false} searchable={true} color="#AB987A"
                        />
                    </div>

                </div>

                <div className='controls-container'>
                    <label htmlFor='model'>Model Family</label>
                    <div className='input-container'>
                        <Select
                            options={this.state.allModelFamilies}
                            labelField='modelName'
                            ValueField='modelId'
                            name='model'
                            multi={false}
                            searchable={false} color="#AB987A"
                        />
                    </div>
                </div>

                <div className='controls-container'>
                    <label htmlFor='modelNo'>Model Number</label>
                    <div className='input-container'>
                        <input type='text' name='modelNo' value={this.state.modelNo}/>
                    </div>
                </div>

                <div className='controls-container'>
                    <label htmlFor='condition'> Condition</label>
                    <div className='input-container'>
                        <Select
                            options={this.state.allConditions}
                            labelField='title'
                            ValueField='id'
                            name='condition'
                            multi={false}
                            searchable={false} color="#AB987A"
                        />
                    </div>
                </div>

                <div className='controls-container'>
                    <label htmlFor='condition'>Gender</label>
                    <div className='input-container'>
                        <Select
                            options={this.state.allGenders}
                            labelField='title'
                            ValueField='id'
                            name='gender'
                            multi={false}
                            searchable={false} color="#AB987A"
                        />
                    </div>
                </div>

                <div className='controls-container'>
                    <label htmlFor='purchaseYear'>Model Number</label>
                    <div className='input-container'>
                        <input name='purchaseYear' type='text' value={this.state.purchaseYear}/>
                    </div>
                </div>

                <div className='controls-container'>
                    <label htmlFor='movementType'>Movement Type </label>
                    <div className='input-container'>
                        <Select
                            options={this.state.allMovementsTypes}
                            labelField='title'
                            ValueField='id'
                            name='movementType'
                            multi={false}
                            searchable={false} color="#AB987A"
                        />
                    </div>
                </div>

                <div className='controls-container'>
                    <label htmlFor='caseSize'>Case Size/Diameter</label>
                        <div className='input-container'>
                        <Select
                            options={this.state.allCaseSizes}
                            labelField='title'
                            ValueField='id'
                            name='caseSize'
                            multi={false}
                            searchable={false} color="#AB987A"
                        />
                        </div>
                </div>

                <div className='controls-container'>
                    <label htmlFor='caseMaterial'>Case Material </label>
                        <div className='input-container'>
                        <Select
                            options={this.state.allCaseMaterials}
                            labelField='title'
                            ValueField='id'
                            name='caseMaterial'
                            multi={false}
                            searchable={false} color="#AB987A"
                        />
                        </div>
                </div>

                <div className='controls-container'>
                    <label htmlFor='lug'>Lug Width</label>
                        <div className='input-container'>
                        <Select
                            options={this.state.allLugs}
                            labelField='title'
                            ValueField='id'
                            name='lug'
                            multi={false}
                            searchable={false} color="#AB987A"
                        />
                        </div>
                </div>
                <div className='controls-container'>
                    <label htmlFor='bracelet'>Bracelet/Strap Type</label>
                        <div className='input-container'>
                        <Select
                            options={this.state.allBracelets}
                            labelField='title'
                            ValueField='id'
                            name='bracelet'
                            multi={false}
                            searchable={false} color="#AB987A"
                        />
                        </div>
                </div>
                <div className='controls-container'>
                    <label htmlFor='bezel'>Bezel</label>
                        <div className='input-container'>
                        <Select
                            options={this.state.allBezels}
                            labelField='title'
                            ValueField='id'
                            name='bezel'
                            multi={false}
                            searchable={false} color="#AB987A"
                        />
                        </div>
                </div>

                <div className='controls-container'>
                    <label htmlFor='dialColor'>Dial Color</label>
                        <div className='input-container'>
                        <Select
                            options={this.state.allColor}
                            labelField='name'
                            ValueField='hex'
                            name='dialColor'
                            multi={false}
                            searchable={false}
                        />
                        </div>
                </div>

                <div className='controls-container'>
                    <label htmlFor='crystal'>Crystal</label>
                        <div className='input-container'>
                        <Select
                            options={this.state.allCrystals}
                            labelField='title'
                            ValueField='id'
                            name='crystal'
                            multi={false}
                            searchable={false}
                        />
                        </div>
                </div>

                <div className='controls-container'>
                    <label htmlFor='box'>Box</label>
                        <div className='input-container'>
                        <Select
                            options={this.state.allBoxes}
                            labelField='title'
                            ValueField='id'
                            name='box'
                            multi={false}
                            searchable={false}
                        />
                        </div>
                </div>

                <div className='controls-container'>
                    <label htmlFor='paper'>Papers</label>
                        <div className='input-container'>
                        <Select
                            options={this.state.allPapers}
                            labelField='title'
                            ValueField='id'
                            name='paper'
                            multi={false}
                            searchable={false}
                        />
                        </div>
                </div>

                <div className='controls-container'>
                    <label htmlFor='manual'>manual</label>
                        <div className='input-container'>
                        <Select
                            options={this.state.allManual}
                            labelField='title'
                            ValueField='id'
                            name='manual'
                            multi={false}
                            searchable={false}
                        />
                        </div>
                </div>

                <div className='controls-container'>
                    <label htmlFor='thickness'>Thickness</label>
                        <div className='input-container'>
                        <Select
                            options={this.state.allThickness}
                            labelField='title'
                            ValueField='id'
                            name='thickness'
                            multi={false}
                            searchable={false}
                        />
                        </div>
                </div>
                <div className='controls-container'>
                    <label htmlFor='thickness'>Images</label>
                    <div className='input-container'>
                        <ImageUploader
                            withIcon={true}
                            buttonText='upload watch images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.png', '.jpeg']}
                            maxFileSize={5242880}
                        />
                    </div>
                </div>
                <div className='controls-container btn-container'>
                    <button className='btn btn-outline' type='submit'>Submit</button>
                </div>
            </div>
        );
    }
};

export default SellForm;