import React, {Component} from 'react';
import MapWithControlledZoom from "./ControlledMap";
import ArrowRightFa from 'react-icons/lib/fa/arrow-right'

class VitMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.addressData,
      toggleFlagForMenu: false
    };

    this.clickToggleMenu = this.clickToggleMenu.bind(this);
  }
  clickToggleMenu(e) {
    e.preventDefault();
    this.setState({toggleFlagForMenu: !this.state.toggleFlagForMenu});
    console.log(e.currentTarget);
  }
  render() {
    let toggleFlagForMenu = this.state.toggleFlagForMenu;
    return (
      <div className='container'>
        <div className="row">
          <div className="col-xs-12">
            <div className='v-map_filters'>
              <section>
                <input type="text" placeholder='search'/>
                <button>search</button>
              </section>
              <button
                className='v-map_filters-button'
                onClick={this.clickToggleMenu}
              >
                <span>AnyPrice</span>
                <ArrowRightFa/>
              </button>
              {
                toggleFlagForMenu ? <div>1</div> : ''
              }
              <div className='v-map_filters-button'>
                <span>Any Beds</span>
                <ArrowRightFa/>
              </div>
              {
                toggleFlagForMenu ? <div>2</div> : ''
              }
              <div className='v-map_filters-button'>
                <span>Any Bath</span>
                <ArrowRightFa/>
              </div>
              <div className='v-map_filters-button'>
                <span>More filters</span>
                <ArrowRightFa/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <MapWithControlledZoom address={this.state.address}/>
          </div>

          <div className="col-xs-6">
            <div className='v-map_sidebar'>
              <div className='v-map_sidebar-list-wrapper'>
                <section className="v-map_sidebar-header">
                  <span>100 Homes</span>
                  <div>
                    <span>Sort by</span>
                    <select name="" id="">
                      <option value="1">option1</option>
                      <option value="2">option2</option>
                      <option value="3">option3</option>
                      <option value="4">option4</option>
                    </select>
                  </div>
                  <span>icon 1</span>
                  <span>icon 2</span>
                </section>
                <ul className='v-map_sidebar-list'>
                  {
                    this.state.address.map((element, index) =>
                      <li key={index} className='v-map_sidebar-item'>
                        <a href="#">
                          <div className='v-map_sidebar-img-wrapper'>
                            <img
                              src="http://z500.com.ua/thumbs/700x526s20tr1/-FilesZ500-res-wizualizacje-Zx24-Zx24_view1_jpg.jpg"
                              alt=""/>
                          </div>
                          <div className='v-map_sidebar-item-body'>
                            <span>Adress{index + 1}</span>
                            <span>wewesss</span>
                            <span>ssdsdsd</span>
                            <span>112345676</span>
                            <div>
                              <button>Button0</button>
                              <button>Button3</button>
                            </div>
                          </div>
                        </a>
                      </li>
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default VitMap;