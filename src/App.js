import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import SideBar from "react-sidebar";
import { Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Navbar'


import Autocomplete from 'react-google-autocomplete';

class App extends Component {

  constructor(props) {
    super(props);
    var values = [];
    this.allHotels = [];
    this.state = {
      data: [],
    };
    this.state = {
      posts: []
    };this.state = {
      collectionids: []
    };this.state = {
      sidebartitle: []
    };
    this.state = {
      imageSlides: []
    };
  }
  delta() {
    this.setState({
      count : this.state.posts
    });
  }
  getCityId(url){
    url = document.querySelector('.city').id;
    console.log("testhide",this.state.hide);
    this.setState({hide: "true"});
    console.log("testhide",this.state.hide);
    this.setState({hide1: !this.state.hide1});
    this.setState({hide2: this.state.hide2});
    this.setState({hide3: !this.state.hide3});
    this.setState({hide4: !this.state.hide4});
    this.fetchFirst(url);
  }
  fetchFirst(url) {
    //console.log(url.currentTarget.id,"value");
    url = document.querySelector('.maindiv').id;
    console.log("test",url);
    if (url) {
      fetch('https://developers.zomato.com/api/v2.1/location_details?entity_id=' + url + '&entity_type=zone', {
        method: "POST",
        headers: {
          'user-key': 'ca6273c10d524888855d0acfb8806638',
        }
      }).then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      }).then(response => {
        this.renderCards(response)
      })
    }
  }
  fetchFirst3(url) {
   // console.log(url.currentTarget.id,"value");
   url = document.querySelector('.maindiv3').id;
    //console.log("test",url);
    if (url) {
      fetch('https://developers.zomato.com/api/v2.1/location_details?entity_id='+url+'&entity_type=zone', {
        method: "POST",
        headers: {
          'user-key': 'ca6273c10d524888855d0acfb8806638',
        }
      }).then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      }).then(response => {
        this.renderCards(response)
      })
    }
  }
  fetchFirst4(url) {
   // console.log(url.currentTarget.id,"value");
   url = document.querySelector('.maindiv4').id;
    //console.log("test",url);
    if (url) {
      fetch('https://developers.zomato.com/api/v2.1/location_details?entity_id='+url+'&entity_type=zone', {
        method: "POST",
        headers: {
          'user-key': 'ca6273c10d524888855d0acfb8806638',
        }
      }).then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      }).then(response => {
        this.renderCards(response)
      })
    }
  }
    fetchFirst5(url) {
    //console.log(url.currentTarget.id,"value");
    url = document.querySelector('.maindiv5').id;
    //console.log("test",url);
    if (url) {
      fetch('https://developers.zomato.com/api/v2.1/location_details?entity_id='+url+'&entity_type=zone', {
        method: "POST",
        headers: {
          'user-key': 'ca6273c10d524888855d0acfb8806638',
        }
      }).then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      }).then(response => {
        this.renderCards(response)
      })
    }
  }
  fetchFirst1(url) {
    url = document.querySelector('.maindiv1').id;
    //console.log("test",url);
    if (url) {
      fetch('https://developers.zomato.com/api/v2.1/location_details?entity_id='+url+'&entity_type=zone', {
        method: "POST",
        headers: {
          'user-key': 'ca6273c10d524888855d0acfb8806638',
        }
      }).then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      }).then(response => {
        this.renderCards(response)
      })
    }
  }

  fetchFirst2(url) {
    url = document.querySelector('.maindiv2').id;
    //console.log("test",url);
    if (url) {
      fetch('https://developers.zomato.com/api/v2.1/location_details?entity_id='+url+'&entity_type=zone', {
        method: "POST",
        headers: {
          'user-key': 'ca6273c10d524888855d0acfb8806638',
        }
      }).then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      }).then(response => {
        this.renderCards(response)
      })
    }
  }

  description() {
    var name =document.querySelector('.hotel-name').id;
    fetch('https://developers.zomato.com/api/v2.1/restaurant?res_id=' + name, {
      method: "POST",
      headers: {
        'user-key': 'ca6273c10d524888855d0acfb8806638',
      }
    }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    }).then(response => {
      this.hotelDetails(response);
    })
  }
  categoryfilter(iddd){
    console.log(iddd.currentTarget.id,"titile");
    fetch('https://developers.zomato.com/api/v2.1/search?entity_id=3&collection_id='+iddd.currentTarget.id, {
      method: "POST",
      headers: {
        'user-key': 'ca6273c10d524888855d0acfb8806638',
      }
    }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    }).then(response => {
        console.log("error");
      //console.log("response",response)
        this.renderCradsFilter(response);
    })
  }

    renderCradsFilter(hits) {
    console.log("rendercardsfilter",hits);
        let data = this.state.posts;
        this.setState({hide: this.state.hide});
      console.log("testhide",this.state.hide);
        this.setState({hide1: this.state.hide1});
        this.setState({hide2: this.state.hide2});
        this.setState({hide3: this.state.hide3});
        let reviews_count =[],photos=[],votes=[],rating=[],name=[],address=[],cards=[],res_id=[];
       console.log(hits,"hitsdetails");
        // //console.log(reviews_count);
        Object.entries(hits.restaurants).map(([make, type]) => {
           // console.log(type,"rendercardsfilter");
            Object.entries(type).map(([make, restruant]) => {
                res_id = restruant.R.res_id;
                reviews_count = restruant.all_reviews_count;
                photos = restruant.featured_image;
                votes = restruant.user_rating.votes;
                rating = restruant.user_rating.aggregate_rating;
                name = restruant.name;
                let i=0;
                address = restruant.location.address;
              cards.push(<div className="container"  >
                <br/>
                <div className="row row-margin-bottom" >
                  <div className="col-md-5 no-padding lib-item" data-category="view" id="hotels">
                    <div className="lib-panel">
                      <div className="row box-shadow" id="content-description">
                        <div className="col-md-6">
                          <p className="card-text top-left fa fa-star rating">{rating}</p>
                          <img className="lib-img-show" id="description-images" src={photos}/>
                        </div>
                        <div className="col-md-6" >
                          <div className="lib-row lib-header">
                            <a className="hotel-name" href="#" onClick={this.description.bind(this)}  id={res_id}>{name}</a><br/>
                            <div className="lib-header-seperator"></div>
                          </div>
                          <div className="lib-row lib-desc" >
                            <p className="card-text fa fa-map-marker">   {address} </p><br/>
                            <p className="card-text fa fa-thumbs-o-up"> ({votes}) </p><br/>
                            <p className="card-text fa fa-user-circle-o"> {reviews_count} </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>);
            })
        })

        this.setState({
            data: cards,
        });
       console.log(cards,"rendercards");
        return cards;
    }

  hotelDetails(hits) {
    let data = this.state.posts;
    let { isLoading } = this.state;
    let reviews_count =[],photos=[],votes=[],rating=[],name=[],address=[],cards=[],res_id=[],images=[],city_id=[],username=[];
    console.log(hits.location.city_id,"hitshoteldetails");
    this.setState({hide: this.state.hide});
    console.log("testhide",this.state.hide);
    this.setState({hide2: !this.state.hide2});
    this.setState({hide3: this.state.hide3});
    this.setState({hide4: !this.state.hide4});
    // //console.log(reviews_count);
    Object.entries(hits.all_reviews.reviews).map(([make, type]) => {
      res_id = type.rating_text;
      city_id = hits.location.city_id;
      photos = hits.featured_image;

      Object.entries(type).map(([make, restruant]) => {
        reviews_count = restruant.review_text;
        console.log(restruant,"photosusers");
        votes = restruant.user.profile_image;
        username = restruant.user.name;
        cards.push(<div className="container" id="review-conatiner"><div className="tab-content box-shadow" style={{backgroundColor: "white"}}>
          <div className="tab-pane active" id="comments-logout">
            <ul className="media-list">
              <li className="media">
                <a className="pull-left" href="#"/>
                <img className="media-object img-circle" id="profile-image" src={votes} alt="profile"/>
                <div className="media-body">
                  <div className="well well-lg city" id={city_id}>
                    <h4 className="media-heading reviews" >{username}</h4>
                    <div className="lib-header-seperator"></div>
                    <p className="media-comment">
                      {reviews_count}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div></div>);
      })
    })
    Object.entries(hits.photos).map(([make, type]) => {
      //console.log(type.photo.url,"imagesphoto");
      photos = type.photo.url;
      images.push(<>
            <img id="image-slides" src={photos}/>
      </>);
    })

this.setState({
      data: cards,
    });
this.setState({
  imageSlides: images,
    });
    //console.log(cards,"cards");
    return cards;
  }

  renderCards(hits) {
    console.log("hits location_id",hits.location.city_id);
    this.getCategories(hits.location.city_id);
    let data = this.state.posts;
    this.setState({hide: !this.state.hide});
    this.setState({hide1: !this.state.hide1});
    this.setState({hide2: !this.state.hide2});
    this.setState({hide3: !this.state.hide3});
    this.setState({hide4: this.state.hide4});
    let reviews_count =[],photos=[],votes=[],rating=[],name=[],address=[],cards=[],res_id=[];
    //console.log(hits,"hits");
    // //console.log(reviews_count);
    Object.entries(hits.best_rated_restaurant).map(([make, type]) => {
      Object.entries(type).map(([make, restruant]) => {
        res_id = restruant.R.res_id;
        reviews_count = restruant.all_reviews_count;
        photos = restruant.featured_image;
        votes = restruant.user_rating.votes;
        rating = restruant.user_rating.aggregate_rating;
        name = restruant.name;
        let i=0;
        address = restruant.location.address;
        cards.push(<div className="container"  >
          <br/>
          <div className="row row-margin-bottom" >
            <div className="col-md-5 no-padding lib-item" data-category="view" id="hotels">
              <div className="lib-panel">
                <div className="row box-shadow" id="content-description">
                  <div className="col-md-6">
                    <p className="card-text top-left fa fa-star rating">{rating}</p>
                    <img className="lib-img-show" id="description-images" src={photos}/>
                  </div>
                  <div className="col-md-6" >
                    <div className="lib-row lib-header">
                      <a className="hotel-name" href="#" onClick={this.description.bind(this)}  id={res_id}>{name}</a><br/>
                      <div className="lib-header-seperator"></div>
                    </div>
                    <div className="lib-row lib-desc" >
                      <p className="card-text fa fa-map-marker">   {address} </p><br/>
                      <p className="card-text fa fa-thumbs-o-up"> ({votes}) </p><br/>
                      <p className="card-text fa fa-user-circle-o"> {reviews_count} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>);
      })
    })

    this.setState({
      data: cards,
    });
    //console.log(cards,"cards");
    return cards;
  }

  getCategories(city_id){
    fetch('https://developers.zomato.com/api/v2.1/collections?city_id='+city_id, {
      method: "POST",
      headers: {
        'user-key': 'ca6273c10d524888855d0acfb8806638',
      }
    }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    }).then(response => {
      this.fetchCategories(response);
    })
  }


  fetchCategories(hits) {
    let data = this.state.posts;
    let reviews_count = [], photos = [], votes = [], rating = [], title = [], address = [], cards = [], collection_id = [],
        images = [],navbar=[];

    Object.entries(hits.collections).map(([make, type]) => {
      //console.log(type, "fetch");
      collection_id = type.collection.collection_id;
      title = type.collection.title;
     // console.log(collection_id, "collection_id");
      navbar.push( <div className="col" >
          <div className="lib-row lib-desc">
              <a className="category-name" href="#" onClick={this.categoryfilter.bind(this)} data-mode={collection_id} id={collection_id}>{title}</a><br/>
          </div>
      </div>)
    });
  //  console.log(navbar,"navbar");
    this.setState({
      sidebartitle:navbar
    });
  }

  render() {
    return (
        <div className={'hide3-' + this.state.hide3} >
        <div className="App" >
          <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <header className="App-header">
            <script src="https://unpkg.com/react/umd/react.production.js" crossOrigin/>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB9BAyPPK8paHSyGKiIf2C-cxx1L36Naigv&libraries=places"></script>
            <script
                src="https://unpkg.com/react-dom/umd/react-dom.production.js"
                crossOrigin
            />
            <script
                src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin
            />
            <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"></script>
            <Navbar expand="lg" variant="light" bg="#6c757d" fixed="top">

              <Navbar.Collapse>
                <img src="https://pbs.twimg.com/profile_images/907183349474639872/zaG8GT03.jpg"  height="50px"  className="navbar-brand"/>
                <Nav pullRight>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {/*<nav className="navbar navbar-expand-sm bg-light navbar-light">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Furlenco.jpg"  height="50px"  className="navbar-brand"/>

            </nav>*/}
            <div className={'hide2-' + !this.state.hide2}>
              <div className="sidenav">
                <p className="filter rgba-mdb-color-strong" id="filter-text" aria-hidden="true"><span className="fa fa-line-chart"></span>  Top Picks</p>
                {this.state.sidebartitle}
              </div>
            </div>
            {/*<Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Navbar>*/}
          </header>
          <div className={'hide1-' + this.state.hide1} id="pills-row">
          <div className="card promoting-card" id="pills">
            <div className="card-body d-flex flex-row maindiv" id="2500" data-mode="2500"  onClick={this.fetchFirst.bind(this)}>
              <img src="https://i.pinimg.com/originals/02/80/41/028041c46c2c52e272593bbcf5029ca7.jpg" class="rounded-circle mr-3" height="50px" width="50px" alt="avatar"/>
                <div className="content-div" >
                  <h4 class="card-title font-weight-bold mb-2" id="content">Mumbai</h4>
                </div>
            </div>
          </div>
          <div className="card promoting-card" id="pills">
            <div className="card-body d-flex flex-row maindiv1" id="3" onClick={this.fetchFirst1.bind(this)}>
              <img src="http://24.media.tumblr.com/15ffcc20008b50119398c0d7be9129c4/tumblr_mw4yxdG1mC1rv17z8o1_r2_1280.png" className="rounded-circle mr-3" height="50px" width="50px" alt="avatar"/>
              <div className="content-div">
                <h4 className="card-title font-weight-bold mb-2" id="content">New Delhi</h4>
              </div>
            </div>
          </div>
          <div className="card promoting-card" id="pills">
            <div className="card-body d-flex flex-row maindiv2" id="5400" onClick={this.fetchFirst2.bind(this)}>
              <img src="https://cdn3.iconfinder.com/data/icons/world-cities-1/256/50-512.png" className="rounded-circle mr-3" height="50px" width="50px" alt="avatar"/>
              <div className="content-div">
                <h4 className="card-title font-weight-bold mb-2" id="content">Bangalore</h4>
              </div>
            </div>
          </div>
          </div>
          <div className={'hide1-' + this.state.hide1} id="pills-row">
          <div className="card promoting-card" id="pills">
            <div className="card-body d-flex flex-row maindiv3" id="5" onClick={this.fetchFirst3.bind(this)}>
              <img src="https://i.pinimg.com/originals/05/96/8f/05968f32e9151fc5053f3c03e4e0af5b.jpg" className="rounded-circle mr-3" height="50px" width="50px" alt="avatar"/>
              <div className="content-div">
                <h4 className="card-title font-weight-bold mb-2" id="content">Pune</h4>
              </div>
            </div>
          </div>
          <div className="card promoting-card" id="pills">
            <div className="card-body d-flex flex-row maindiv4" data-mode="7" id="7" onClick={this.fetchFirst4.bind(this)}>
              <img src="https://cdn.dribbble.com/users/1470134/screenshots/4446998/anna-university800-x-600.gif" className="rounded-circle mr-3" height="50px" width="50px" alt="avatar"/>
              <div className="content-div">
                <h4 className="card-title font-weight-bold mb-2" id="content">Chennai</h4>
              </div>
            </div>
          </div>
          <div className="card promoting-card" id="pills">
            <div className="card-body d-flex flex-row maindiv5" id="6" data-mode="6" onClick={this.fetchFirst5.bind(this)}>
              <img src="https://i.pinimg.com/originals/ab/5e/6c/ab5e6c19e14347457895efc5d777eab3.png" className="rounded-circle mr-3" height="50px" width="50px" alt="avatar"/>
              <div className="content-div">
                <h4 className="card-title font-weight-bold mb-2" id="content">Hyderabad</h4>
              </div>
            </div>
          </div>
          </div>
          {/*<Button className="maindiv" onClick={this.fetchFirst.bind(this)} id="2500">Bangalore</Button>
          <Button className="maindiv" onClick={this.fetchFirst.bind(this)} id="3" >mumbai</Button>*/}
          <div className={'hide-' + !this.state.hide}>
            <Carousel autoPlay infiniteLoop='true' >
              {
                this.state.imageSlides.map( image => {
                  return <div>
                    <p id="image-slides">{ image}</p>
                  </div>
                })
              }
            </Carousel>
          </div>
          <div className="container">
          <div className={'hide4-' + !this.state.hide4}>
            <Button variant="info" id="back" onClick={this.getCityId.bind(this)}>Back</Button>
          </div>
          </div>
          <div className="col-auto">
            {this.state.data}
          </div>


        </div></div>
    );
  }
}

export default App;

