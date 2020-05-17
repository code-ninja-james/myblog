import React from 'react';

import { Form, Button,Label } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import NetlifyForm from 'react-netlify-form';



import Hero from '../components/Hero';
import Content from '../components/Content';

 
class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }


   

    render() {
        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                <NetlifyForm name='Contact Form'>
  {({ loading, error, success }) => (
    <div>
      {loading &&
        <div>Loading...</div>
      }
      {error &&
         <Label as='a' basic color='red' > Not Sent!</Label>
      }
      {success &&
        <Label as='a' basic color='green' > Sent! </Label>
      }
      {!loading && !success &&
                
             
 <Form action="https://getform.io/f/b6c1a2a5-a5f1-4d17-8343-1c14738a8f7f" method="POST">
    <Form.Field>
      <label>Name</label>
      <input 
      placeholder='Name' 
      type='text' 
      name='name' 
      />
    </Form.Field>

    <Form.Field>
   <label>Email</label>
   <input
       placeholder='Email' 
       type="email"
       name="Email"  
      />
      </Form.Field>

<Form.Field>
<label>Message</label>
<textarea
placeholder='Message'
type='textArea'
name='message'
/>


</Form.Field>

<Button type='submit'>Submit</Button>

  </Form>


}
</div>
)}
</NetlifyForm>

  
 
  </Content>
            </div>
        );
    }

}

export default ContactPage;