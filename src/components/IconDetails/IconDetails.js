import React, { Component } from 'react';
import classnames from 'classnames'
import { settings } from 'carbon-components';
import { 
  FormGroup, 
  RadioButtonGroup, 
  RadioButton,
  CodeSnippet
} from 'carbon-components-react/es'

const { prefix } = settings;

const svgFileSizes = [32, 24, 20, 16]

class IconDetails extends Component {
  render() {
    const { 
      icons,
      detailsActive,
      onCloseDetails,
      onSearchTerm,
      onSVGSizeChange,
      svgSize,
      selectedIcon
     } = this.props

    console.log(selectedIcon)
    return (
      <div className={classnames('icon-details-container', {
        'active': detailsActive
      })}>
        <div className="icon-details">
          <div className="icon-details-header">
            <span>{selectedIcon.friendly_name}</span>
            <button className="icon-details-close" onClick={onCloseDetails}>
              <icons.Close20 />
            </button>
          </div>
          <div className="icon-details-content">
            <div className="ibm--col-lg-4 icon-details-section">
              <div className="icon-details-section-item">
                <span className={`${prefix}--type-label-01 icon-details-section-header`}>Usage</span>
                <p className={`${prefix}--type-body-short-01`}>{selectedIcon.usage}</p>
              </div>

              <div className="icon-details-section-item">
                <span className={`${prefix}--type-label-01 icon-details-section-header`}>Category</span>
                <p className={`${prefix}--type-body-short-01`}>
                  {selectedIcon.categories && selectedIcon.categories.map((cat, i) => <span key={`cat-${i}`}>{`${cat}${i<selectedIcon.categories.length-1 ? ', ' : ''}`}</span>)}
                </p>
              </div>

              <div className="icon-details-section-item">
                <a className="icon-details-download" href="#">Download SVG <span><icons.Download16 /></span></a>
              </div>
            </div>
            <div className="ibm--col-lg-7 icon-details-section">
              <div className="icon-details-section-item">
                <span className={`${prefix}--type-label-01 icon-details-section-header`}>Icon sizes</span>
                <ul className="icon-details-icon-list">
                  { selectedIcon.sizes && selectedIcon.sizes.sort().reverse().map((size, i) => {
                    const Icon = icons[`${selectedIcon.friendly_name}${size}`]
                    
                    return (
                      <li key={`ico${i}`}>
                        <Icon />
                      </li>
                    )}
                  )}
                </ul>
              </div>

              <div className="icon-details-section-item">
                <span className={`${prefix}--type-label-01 icon-details-section-header`}>SVG file</span>
                <FormGroup legendText="">
                  <RadioButtonGroup defaultSelected={32}
                                    valueSelected={svgSize}
                                    name="svgFileSizes"
                                    onChange={onSVGSizeChange}>
                    { svgFileSizes.map((size, i) => (
                        <RadioButton key={`size-${i}`} disabled={selectedIcon.sizes &&  selectedIcon.sizes ? !selectedIcon.sizes.includes(size) : false } value={size} id={`radio-${i+1}`} labelText={`${size}px`} />
                      ))
                    }
                  </RadioButtonGroup>
                </FormGroup>
              </div>

              <div className="icon-details-section-item">
                <span className={`${prefix}--type-label-01 icon-details-section-header`}>Path</span>
                <CodeSnippet type="inline">{`es/watson-health/3D-curve--auto-vessels/${svgSize}.js`}</CodeSnippet>
              </div>
            </div>
            <div className="ibm--col-lg-5 icon-details-section">
              <div className="icon-details-section-item">
                <span className={`${prefix}--type-label-01 icon-details-section-header`}>Related icons</span>
                <ul className="icon-details-icon-list">
                {
                  selectedIcon.variants && selectedIcon.variants.map((variant, i) => {
                    const Icon = icons[`${variant.name}20`]

                    return (
                      <li key={`variant${i}`}>
                        <button>
                          <Icon />
                        </button>
                      </li>
                    )
                  })

                }
                </ul>
              </div>
              
              <div className="icon-details-section-item">
                <span className={`${prefix}--type-label-01 icon-details-section-header`}>Related search</span>
                <ul className="icon-details-related-list">
                  <li><button className={`${prefix}--type-body-short-01`} onClick={() => { onSearchTerm('camera')}}>Camera,</button></li>
                  <li><button className={`${prefix}--type-body-short-01`} onClick={() => { onSearchTerm('record')}}>record,</button></li>
                  <li><button className={`${prefix}--type-body-short-01`} onClick={() => { onSearchTerm('rolling')}}>rolling,</button></li>
                  <li><button className={`${prefix}--type-body-short-01`} onClick={() => { onSearchTerm('film')}}>film,</button></li>
                  <li><button className={`${prefix}--type-body-short-01`} onClick={() => { onSearchTerm('action')}}>action,</button></li>
                  <li><button className={`${prefix}--type-body-short-01`} onClick={() => { onSearchTerm('tape')}}>tape,</button></li>
                  <li><button className={`${prefix}--type-body-short-01`} onClick={() => { onSearchTerm('video')}}>video</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IconDetails;