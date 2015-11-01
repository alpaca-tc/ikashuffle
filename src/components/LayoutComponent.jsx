'use strict'

const React = require('react');
const _ = require('lodash');
const { bindActionCreators } = require('redux');
const { Component, PropTypes } = React;
const { connect } = require('react-redux');
const LayoutAction = require('../actions/LayoutAction');

class WeaponComponent extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.index + 1}</td>
        <td>{this.props.weapon.get('name')}</td>
      </tr>
    );
  }
}

class LayoutComponent extends Component {
  render() {
    const weapons = this.props.weapons || [];
    console.log(weapons);
    const weaponComponents = _.map(weapons, (weapon, index) => {
      return <WeaponComponent key={index} index={index} weapon={weapon}/>
    });

    return (
      <div className="panel panel-default">
        <div className="panel-heading">Weapon List</div>

        <div className="bs-example" data-example-id="single-button-dropdown">
          <div className="btn-group">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All <span className="caret"></span></button>
            <ul className="dropdown-menu">
              <li><a href="#">Charger</a></li>
              <li><a href="#">Roller</a></li>
              <li><a href="#">Blaster</a></li>
            </ul>
          </div>

          <div className="btn-group">
            <button type="button" className="btn btn-primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.props.shuffleWeapons.bind(this)}>Shuffle</button>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Weapon name</td>
            </tr>
          </thead>

          <tbody>{weaponComponents}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const weapons = state.Weapon;

  return {
    weapons: weapons,
    weaponLength: weapons.length
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LayoutAction, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
