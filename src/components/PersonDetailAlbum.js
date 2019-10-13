import React, { Component } from 'react'

class PersonDetailAlbum extends Component {

  render() {
    return (
      <div className="detailAlbumsListContainer">
        {
          this.props.photo.map(pic => {
            return (
              <div className="detailSinglePicContainer" key={pic.cover}>
                <img src={`Albums/${this.props.name}/${pic.cover}.jpeg`} alt="Photo" className="detailsAlbumPic"/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default PersonDetailAlbum
