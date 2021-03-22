import React from 'react';
import SimpleReactUsingClassComp from './SimpleReactUsingClassComp';
import SimpleReactUsingFn from './SimpleReactUsingFn'
import UsingRenderMethod from './UsingRenderMethod'
import UseProperties from './UseProperties'
import UsingSetState from './UsingSetState'
import UsingReactComponentsAsChildren from './UsingReactComponentsAsChildren'
import AccessNestedDataUsingprops from './AccessNestedDataUsingProps'
import CustomPropTypeValidations from './CustomPropTypeValidations'
import AllReactEvents from './AllReactEvents'
import UseReactRef from './UseReactRef'
import ReactLifeCycleMethodsEx1 from './ReactLifeCycleMethodsEx1'
import ReactLifeCycleMethodEx2 from './ReactLifeCycleMethodEx2'
import ComponentUpdateByNewProps from './ComponentUpdateByNewProps'
import FetchingDataUsingMap from './FetchingDataUsingMap'
import UseStateEx1 from './UseStateEx1'
import UseStateEx2 from './UseStateEx2'
import UseEffectEx1 from './UseEffectEx1'
import UseEffectEx2 from './UseEffectEx2'
class App extends React.Component {
  render(){
    return (
        <div>
           <SimpleReactUsingFn/>
           {/* <SimpleReactUsingClassComp/>
           <UsingRenderMethod/> */}

           {/* using for for rendering default text */}
           {/* <UseProperties/>

           <UsingSetState/>
           <UsingReactComponentsAsChildren/>
           <AccessNestedDataUsingprops/>
           <CustomPropTypeValidations/>
           <AllReactEvents/>
           <UseReactRef/>
           <ReactLifeCycleMethodsEx1/>
           <ReactLifeCycleMethodEx2/>
           <ComponentUpdateByNewProps/>
           <FetchingDataUsingMap/>
           <UseStateEx1/>
           <UseStateEx2/>
           <UseEffectEx1/>
           <UseEffectEx2/> */}
        </div>
    )
  }
}


export default App
