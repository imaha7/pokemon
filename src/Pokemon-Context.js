import React, { createContext } from 'react';
import Swal from 'sweetalert2';

const PokemonContext = createContext();
let arrNickname = [];

export class PokemonProvider extends React.Component {
  updatepokemon = newpokemon => {
    if (Math.random() * 10 > 5) {
      Swal.fire({
        title: 'Good Job!',
        icon: 'success',
        text: "You caught " + newpokemon[0].name + ". Please Enter A Nickname For This Pokemon",
        input: 'text',
        inputValue: '',
        inputPlaceholder: 'Enter your new pokemon nickname',
        showCancelButton: true,
        inputValidator: (val) => {
          if (!val) {
            return 'You need to fill nickname!'
          }
        }
      }).then((result) => {
        if (result.value) {
          newpokemon = [{ name: newpokemon[0].name, nickname: result.value }]
          if (JSON.parse(localStorage.getItem('MyPokemon')) !== null || JSON.parse(localStorage.getItem('MyPokemon')) !== undefined) {
            this.state.pokemon.forEach(p => {
              arrNickname.push(p.nickname);
            });
            if (arrNickname.includes(newpokemon[0].nickname)) {
              Swal.fire({
                title: 'Sorry!',
                input: 'text',
                icon: 'error',
                text: 'Please Enter A Different Nickname For This Pokemon',
                inputPlaceholder: 'Your Pokemon Nickname',
                inputValue: '',
                showCancelButton: false,
                allowOutsideClick: false,
                allowEscapeKey: false,
                inputValidator: (value) => {
                  if (arrNickname.includes(value)) {
                    return 'You need to fill with different nickname!'
                  } else if (!value) {
                    return 'You need to fill nickname!'
                  }
                }
              }).then((result) => {
                if (result.value) {
                  newpokemon[0].nickname = result.value;
                  localStorage.setItem('MyPokemon', JSON.stringify(this.state.pokemon.concat(newpokemon)));
                  this.setState({ pokemon: JSON.parse(localStorage.getItem('MyPokemon')) });
                  Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Pokemon ' + newpokemon[0].name + ' with Nickname : ' + newpokemon[0].nickname + ' Has Been Added Successfully!',
                    showConfirmButton: false,
                    timer: 2000
                  });
                }
              });
            } else {
              localStorage.setItem('MyPokemon', JSON.stringify(this.state.pokemon.concat(newpokemon)));
              this.setState({ pokemon: JSON.parse(localStorage.getItem('MyPokemon')) });
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Pokemon ' + newpokemon[0].name + ' with Nickname : ' + newpokemon[0].nickname + ' Has Been Added Successfully!',
                showConfirmButton: false,
                timer: 2000
              });
            }
          } else {
            localStorage.setItem('MyPokemon', JSON.stringify(this.state.pokemon.concat(newpokemon)));
            this.setState({ pokemon: JSON.parse(localStorage.getItem('MyPokemon')) });
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Pokemon ' + newpokemon[0].name + ' with Nickname : ' + newpokemon[0].nickname + ' Has Been Added Successfully!',
              showConfirmButton: false,
              timer: 2000
            });
          }
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: "Sorry!",
        text: "Catch " + newpokemon[0].name + " Failed. Please Try Again",
        showConfirmButton: false,
        timer: 1500
      });
      return false;
    }
  };

  releasepokemon = nickname => {
    let filteredPokemon = this.state.pokemon.filter(function (pokemon) {
      return nickname !== pokemon.nickname;
    });

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem('MyPokemon', JSON.stringify(filteredPokemon));
        this.setState({ pokemon: JSON.parse(localStorage.getItem('MyPokemon')) });
        Swal.fire(
          'Success',
          "Your pokemon with nickname : " + nickname + " has been released :(",
          'success'
        );
      } else {
        Swal.fire(
          'Cancelled',
          "Your pokemon with nickname : " + nickname + " is safe :)",
          'error'
        );
      }
    });
  };

  releaseallpokemon = mypokemon => {
    if (mypokemon.length > 0) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          mypokemon = localStorage.clear();
          this.setState({ pokemon: [] });
          Swal.fire(
            'Success',
            'All your pokemon has been released :(',
            'success'
          );
        } else {
          Swal.fire(
            'Cancelled',
            'All your pokemon is safe :)',
            'error'
          );
        }
      });
    } else {
      Swal.fire(
        'Sorry',
        'Your pokemon list is empty :(',
        'error'
      );
    }
  };

  state = {
    pokemon: [],
    updatepokemon: this.updatepokemon,
    releasepokemon: this.releasepokemon,
    releaseallpokemon: this.releaseallpokemon
  };

  render() {

    if (JSON.parse(localStorage.getItem('MyPokemon')) != null || JSON.parse(localStorage.getItem('MyPokemon')) != undefined) {
      this.state.pokemon = JSON.parse(localStorage.getItem('MyPokemon'));
    } else {
      this.state.pokemon = [];
    }

    return (
      <PokemonContext.Provider value={this.state}>
        {this.props.children}
      </PokemonContext.Provider>
    );
  }
}

export const PokemonConsumer = PokemonContext.Consumer;
