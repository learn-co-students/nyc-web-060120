import React from 'react'

class CreateForm extends React.Component {

    state = {
        name: "",
        img: "",
        favorite: false
    }
    changehandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({
            name: "",
            img: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.changehandler} />
                <input type="text" placeholder="img" name="img" value={this.state.img} onChange={this.changehandler} />
                {/* <form>
                    <input type="checkbox" value="true" />
                    <input type="checkbox" value="false" />
                </form> */}
                <input type="submit" value="add gif" />
            </form>
        )
    }

}

export default CreateForm