import React, { Component } from 'react';
import { settings } from 'carbon-components';
import { 
  FormGroup, 
  RadioButtonGroup, 
  RadioButton,
  CodeSnippet
} from 'carbon-components-react/es'

const { prefix } = settings;

class IconDetails extends Component {
  render() {
    const {icons} = this.props
    // const { Download16,
    //         Asleep16,
    //         Asleep20,
    //         Asleep24,
    //         Asleep32,
    //         Close20,
    //          } = icons

    console.log('va', icons)

    return (
      <div className="icon-details-container">
        <div className="icon-details">
          <div className="icon-details-header">
            <span>Video Record</span>
            <button className="icon-details-close">
              <icons.Close20 />
            </button>
          </div>
          <div className="icon-details-content">
            <div className="ibm--col-lg-3 icon-details-section">
              <div className="icon-details-section-item">
                <span className={`${prefix}--type-label-01 icon-details-section-header`}>Usage</span>
                <p>Used for controling recording functions.</p>
              </div>

              <div className="icon-details-section-item">
                <span className={`${prefix}--type-label-01 icon-details-section-header`}>Category</span>
                <p>Actions</p>
              </div>

              <div className="icon-details-section-item">
                <a className="icon-details-download" href="#">Download SVG <span><icons.Download16 /></span></a>
              </div>
            </div>
            <div className="ibm--col-lg-5 icon-details-section">
              <div className="icon-details-section-item">
                <span className={`${prefix}--type-label-01 icon-details-section-header`}>Icon sizes</span>
                <ul className="icon-details-icon-list">
                  <li><icons.Asleep32 /></li>
                  <li><icons.Asleep24 /></li>
                  <li><icons.Asleep20 /></li>
                  <li><icons.Asleep16 /></li>
                </ul>
              </div>

              <div className="icon-details-section-item">
                <span className={`${prefix}--type-label-01 icon-details-section-header`}>SVG file</span>
                <FormGroup>
                  <RadioButtonGroup
                    defaultSelected="default-selected"
                    legend="Group Legend"
                  >
                    <RadioButton value="default-selected" id="radio-1" labelText="32px" />
                    <RadioButton value="24" id="radio-2" labelText="24px" disabled />
                    <RadioButton value="20" id="radio-3" labelText="20px" disabled />
                    <RadioButton value="16" id="radio-4" labelText="16px" />
                  </RadioButtonGroup>
                </FormGroup>
              </div>

              <div className="icon-details-section-item">
                <span className={`${prefix}--type-label-01 icon-details-section-header`}>Path</span>
                <CodeSnippet type="inline">{'es/watson-health/3D-curve--auto-vessels/32.js'}</CodeSnippet>
              </div>
            </div>
            <div className="ibm--col-lg-4 icon-details-section">
              <div className="icon-details-section-item">
                <span className={`${prefix}--type-label-01 icon-details-section-header`}>Related icons</span>
                <ul className="icon-details-icon-list">
                  <li>
                    <button>
                      <icons.VideoAdd20 />
                    </button>
                  </li>
                  <li>
                    <button>
                      <icons.VideoOff20 />
                    </button>
                  </li>
                  <li>
                    <button>
                      <icons.Video20 />
                    </button>
                  </li>
                </ul>
              </div>
              
              <div className="icon-details-section-item">
                <span className={`${prefix}--type-label-01 icon-details-section-header`}>Related search</span>
                <p>Camera, record, rolling, film, action, tape, video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IconDetails;