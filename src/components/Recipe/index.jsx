import React, { Component } from 'react'
import './styles.css'

function renderIncredientsList(incredients) {
    return incredients.map((incredient, index) =>
        <li key={index}>{incredient.name}: {incredient.quantity}</li>
    )
}

export default class RecipeItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showCheckSign: false
        }
        this.toogleSelected = this.toogleSelected.bind(this)
    }

    toogleSelected() {
        //TODO: is "this" keyword used too much here?
        this.setState(prevState => {
            this.props.selectHandler(this.props.incredients, !prevState.showCheckSign)
            return {
                showCheckSign: !prevState.showCheckSign
            }
        })
    }

    render() {
        const { title, description, imgUrl, incredients = [] } = this.props
        const checkSign = !this.state.showCheckSign
            ? ''
            : <div className="recipe-selected fa fa-check fa-2x" aria-hidden="true"></div>

        return <div className="recipeItem" onClick={this.toogleSelected} >
            <img className="full-width" src={imgUrl} />
            <h4>{title}</h4>
            <p>{description}</p>
            <ul className="recipeItem__incredients">
                {renderIncredientsList(incredients)}
            </ul>
            {checkSign}
        </div>
    }
}
