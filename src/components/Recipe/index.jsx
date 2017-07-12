import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReadMore from '~/components/ReadMore'
import './styles.css'

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
        const { id, title, description, imgUrl, incredients = [] } = this.props
        const checkSign = !this.state.showCheckSign
            ? ''
            : <div className="recipe-selected fa fa-check fa-2x" aria-hidden="true"></div>

        return <div className="recipeItem"  >
            <img className="full-width" src={imgUrl} onClick={this.toogleSelected} />
            <h4><Link to={`/recipes/${id}`}>{title}</Link></h4>
            <ReadMore className="recipeItem__description">{description}</ReadMore>
            {checkSign}
        </div>
    }
}
