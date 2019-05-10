import React, { Component } from 'react';
import axios from 'axios';
import  Highlight  from 'react-highlight';
// import { For m } from 'react-bootstrap';

class Home extends Component {
    state = {
        search: "",
        result: [],
    }

    // componentDidMount()  {
    //     axios.get(`http://localhost:5000/presidents/${this.state.search}`)
    //     .then(res => {
    //         this.setState({
    //           result: res.data
    //         })
    //     }) 
    // }
    getPresident() {
        axios.get(`http://localhost:5000/presidents/${this.state.search}`)
            .then(res => {
                this.setState({
                    result: res.data
                })
            })
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="jumbotron">
                        <h1>Presidential API</h1>
                        <p className="lead">Data on the Presidents of the USA</p>
                    </div>
                </div>
                <div id="description" className="col-lg-6 center">
                    <p>Search Presidents with different API calls</p>
                    <p><b>Search by name, number in the presidency, etc.</b></p>
                    <p>lorem ipsum <b>:)</b>dolor sit amet</p>
                    <img id="presidential-portrait" src={this.state.result.portrait} className="rounded-circle mx-auto d-block" alt=""/>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <h1 className="center">Make an API call!</h1>
                        <div className="input-group">
                            <span className="input-group-addon">http://localhost:5000/presidents/</span>
                            <input onChange={(e) => this.setState({ search: e.target.value })}
                                type="text" className="form-control" placeholder="number/1/" />
                            <span className="input-group-btn">
                                <button onClick={(e) => this.getPresident(e)}
                                    className="btn btn-primary">search presidents</button>
                            </span>
                        </div>
                        <div className="row">
                            <small>Try these calls: <a href="#">number/1</a>, <a href="#">name/George%20Washington</a>, <a href="#">420/blazeit</a></small>
                        </div>
                        <div className="row">
                            <p className="lead pad_top">Result:</p>
                            <div className="well">
                                <pre className="pre-scrollable">
                                    {/* <Highlight className='javascript'> */}
                                        <p>President {this.state.result.number} of the United States of America</p>
                                        <p>{this.state.result.name} ({this.state.result.born} - {this.state.result.died})</p>
                                        <p>In Office {this.state.result.start} - {this.state.result.end}</p>
                                        <p>Number of terms served: {this.state.result.terms}</p>
                                        <p>{this.state.result.party}</p>
                                        <p>Vice President: {this.state.result.vice}</p>
                                        <p>Prior profession: {this.state.result.prior}</p>
                                        <p>From {this.state.result.home}, {this.state.result.state}</p>
                                        <p>Married to {this.state.result.spouse}</p>
                                    {/* </Highlight> */}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pad_bot">
                    <div className="col-sm-1 col-lg-1 col-md-1"></div>
                    <div className="col-sm-3 col-lg-3 col-md-3">
                        <h4 className="center">what is this</h4>
                        <p>hello world</p>
                        <p>goodbye world</p>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-md-3">
                        <h4 className="center">what is this</h4>
                        <p>hello world</p>
                        <p>goodbye world</p>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-md-3">
                        <h4 className="center">what is this</h4>
                        <p>hello world</p>
                        <p>goodbye world</p>
                    </div>
                    <div className="col-sm-1 col-lg-1 col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default Home;