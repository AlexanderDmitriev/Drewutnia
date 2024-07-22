import styled from 'styled-components';
import Select from 'react-select';

export const LanguageSelect = styled(Select)`
  width: 57px;

  .css-13cymwt-control,
  .css-t3ipsp-control {
    border: none;
    font-family: Inter serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 110%;
    align-items: center;
    color: #f0e7e7;
    background-color: transparent;
    cursor: pointer;
  }
  .css-b62m3t-container {
    height: 35px;
  }
  .css-1u9des2-indicatorSeparator {
    width: 0;
  }
  .css-qbdosj-Input {
    display: none;
  }
  .css-1jqq78o-placeholder {
    color: #f0e7e7;
  }
  .css-1xc3v61-indicatorContainer,
  .css-15lsz6c-indicatorContainer {
    color: #f0e7e7;
    padding: 0;
  }
  .css-1fdsijx-ValueContainer {
    padding: 0;
  }
  .css-1dimb5e-singleValue {
    color: #f0e7e7;
  }
  .css-1nmdiq5-menu {
    color: #f0e7e7;
    background-color: #ffba00;
    .css-1n6sfyn-MenuList {
      display: block;
      .css-d711ni-option {
        background-color: red;
        cursor: pointer;
      }
    }
  }
`;
