import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  '~/stylesheets/recipe.css'

export default class RecipeItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showCheckSign: false
        }
        this.toogleSelected = this.toogleSelected.bind(this)
    }

    toogleSelected() {
        this.setState(prevState => {
            this.props.selectHandler(this.props.incredients, !prevState.showCheckSign)
            return {
                showCheckSign: !prevState.showCheckSign
            }
        })
    }

    render() {
        const { id, title, description, imgUrl, incredients = [] } = this.props
        const checkSign = !this.state.showCheckSign
            ? ''
            : <div className="recipe-selected fa fa-check fa-2x" aria-hidden="true"></div>

        const klass = !this.state.showCheckSign ? "recipeItem" : "recipeItem recipeItem-selected"

        return <div className={klass} >
            <img className="full-width" src={imgUrl} onClick={this.toogleSelected} />
            <h4><Link to={`/recipes/${id}`} className="nostyle">{title}</Link></h4>
            {checkSign}
        </div>
    }
}
