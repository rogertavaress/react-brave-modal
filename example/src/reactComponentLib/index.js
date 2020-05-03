/* eslint-disable */
import React, { createContext, useState, useCallback, useContext } from 'react';
import { FiX } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var appearContentArea = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    top: -100vh;\n  }\n  to {\n    top: 0px;\n  }\n  leaves {\n    top: 100vh;\n  }\n"], ["\n  from {\n    top: -100vh;\n  }\n  to {\n    top: 0px;\n  }\n  leaves {\n    top: 100vh;\n  }\n"])));
var Content = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: #000;\n"], ["\n  color: #000;\n"])));
var ContentArea = styled(animated.div)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  background: white;\n  max-width: 500px;\n  max-height: 80vh;\n  border-radius: 5px;\n  box-sizing: border-box;\n  animation: ", " 1s;\n  overflow: auto;\n\n  & > button {\n    display: flex;\n    position: absolute;\n    top: 10px;\n    right: 5px;\n    border: 0;\n    background: transparent;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n\n    svg {\n      color: rgba(0, 0, 0, 0.7);\n    }\n  }\n"], ["\n  position: relative;\n  background: white;\n  max-width: 500px;\n  max-height: 80vh;\n  border-radius: 5px;\n  box-sizing: border-box;\n  animation: ", " 1s;\n  overflow: auto;\n\n  & > button {\n    display: flex;\n    position: absolute;\n    top: 10px;\n    right: 5px;\n    border: 0;\n    background: transparent;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n\n    svg {\n      color: rgba(0, 0, 0, 0.7);\n    }\n  }\n"])), appearContentArea);
var templateObject_1, templateObject_2, templateObject_3;

var SimpleModal = function (_a) {
    var children = _a.children;
    var closeModal = useModal().closeModal;
    return (React.createElement(ContentArea, null,
        React.createElement("button", { type: "button", onClick: function () { return closeModal(); } },
            React.createElement(FiX, { size: 15 })),
        React.createElement(Content, null,
            React.createElement("p", null, "adasdasdasd asdasdas dasdasda sdadsa sdasdasdasd asdasdas dasdasdas dasdasd adasdasdasd asdasdas dasdasdasdadsa sdasdasdasd asdasdas dasdasdasdasdasd adasdasdasd asdasdas dasdasdasdadsa sdasdasdasd asdasdas dasdasdasdasdasd adasdasdasd asdasdas dasda sdasdadsa sdasdasdasd asdasdas dasdasd asdasdasd adasdasdasd dasdasdasdadsa sdasdasdasd asdasdas dasdasdasdasdasd adasdasdasd asdasdas dasdasdasdadsa sdasdasdasd asdasdas dasdasdasdasdasd"),
            children)));
};

var appearContainer = keyframes(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"], ["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var Container = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.7);\n  animation: ", " 0.2s;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.7);\n  animation: ", " 0.2s;\n"])), appearContainer);
var templateObject_1$1, templateObject_2$1;

var ModelContainer = function (_a) {
    var newProps = _a.newProps, show = _a.show;
    return (React.createElement(React.Fragment, null, show && (React.createElement(Container, null,
        React.createElement(SimpleModal, null, newProps.data)))));
};

var ModalContext = createContext({});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), show = _b[0], setShow = _b[1];
    var _c = useState({}), modal = _c[0], setModal = _c[1];
    var showModal = useCallback(function (_a) {
        var _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.data, data = _c === void 0 ? null : _c;
        setModal({ type: type, data: data });
        setShow(true);
    }, []);
    var closeModal = useCallback(function () {
        setModal({ type: '', data: null });
        setShow(false);
    }, []);
    return (React.createElement(ModalContext.Provider, { value: { showModal: showModal, closeModal: closeModal } },
        children,
        React.createElement(ModelContainer, { newProps: modal, show: show })));
};
var useModal = function () {
    var context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export { ModalProvider, useModal };
