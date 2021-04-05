import React, { Component, PropTypes, PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import GalleryImage from "./GalleryImage"
import GalleryThumbs from "./GalleryThumbs"

import * as actions from "../actions"

export class Gallery extends PureComponent {
  componentDidMount() {
    this.props.loadImages()
  }
  render() {
    const { images, selectImage, selectedImage } = this.props

    return (
      <div className="image-gallery" hidden={!selectedImage}>
        <GalleryImage image={selectedImage} />
        <GalleryThumbs selectImage={selectImage} images={images} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.imageState.images,
    selectedImage: state.imageState.selectedImage,
  }
}

const mapDispatchProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Gallery)
