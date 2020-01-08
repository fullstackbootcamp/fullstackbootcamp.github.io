import React, { Component } from 'react';
import styled from '@emotion/styled';
import _ from 'lodash';
import axios from 'axios';

import { rhythm, scale } from '../utils/typography';

const Container = styled.div`
  top: 45px;
  bottom: 0;
  right: 0;
  width: 40vw;
  background: #000;
  color: #fff;
  padding-left: ${rhythm(1)};
`;

const inputStyles = `
  width: 100%;
  background: none;
  border: 0;
  border-bottom: 1px solid #fff;
  color: #fff;
  padding-right: ${rhythm(1)};
  margin-bottom: ${rhythm(0.5)};
  font-size: ${rhythm(0.5)};
  transition: all 300ms ease;

  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  ${inputStyles}

  &[type="submit"] {
    border: 3px solid #cc0000;
    color: #cc0000;
  }

  &[type='submit']:hover {
    background-color: #cc0000;
    color: #fff;
    cursor: pointer;
  }

  &[type='file'] {
    display: none;
  }
`;

const Textarea = styled.textarea`
  ${inputStyles}
  resize: vertical;
`;

const Select = styled.select`
  ${inputStyles}
  border-radius: 0px;
`;

const Label = styled.label`
  color: #fff;
  font-weight: 700;
  font-size: ${rhythm(0.4)};
`;

const FileLabel = styled.div`
  border: 1px solid #fff;
  width: 100%;
  text-align: center;
  margin-bottom: ${rhythm(0.4)};
`;

const SubmitHeader = styled.h3`
  color: #fff;
  text-align: right;
`;

const ErrorContainer = styled.div`
  width: 100%;
  margin-top: -${rhythm(0.6)};
`;

const ErrorMessage = styled.small`
  color: #cc0000;
  width: 100%;
  font-size: ${rhythm(0.4)};
`;

const SuccessByline = styled.p`
  color: #cc0000;
  text-align: right;
  margin-bottom: 0;
`;

const SuccessMessage = styled.p`
  color: #fff;
  text-align: right;
`;

const SignupAgainBtn = styled.button`
  color: #cc0000;
  background: none;
  border: 2px solid #cc0000;
  transition: all 300ms;
  float: right;

  &:hover {
    background: #cc0000;
    color: #fff;
    cursor: pointer;
  }
`;

const FormInput = props => <Input {...props} autoComplete="disabled" />;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      contactNo: '',
      email: '',
      operatingSystem: 'linux',
      intro: '',
      cv: '',
      submitting: false,
      experience: 'no_degree_with_exp',
      errors: {},
    };
  }

  submit = async e => {
    e.preventDefault();

    await this.setState({ submitting: true });
    try {
      let { data, status } = await axios.post(
        'https://api.hsforms.com/submissions/v3/integration/submit/6456375/218f9b4b-448d-4950-b003-a95351b9a18b',
        {
          fields: [
            { name: 'email', value: this.state.email },
            { name: 'phone', value: this.state.contactNo },
            { name: 'full_name', value: this.state.fullname },
            { name: 'experience', value: this.state.experience },
            { name: 'os', value: this.state.operatingSystem },
            { name: 'intro', value: this.state.intro },
          ],
        }
      );

      if (status === 200) {
        await localStorage.setItem('name', this.state.fullname);
        await this.setState({ submitting: false });
      }
    } catch ({ response: { data } }) {
      const errors = {};

      data.errors.forEach(({ message }) => (errors[message.split("'")[1].split('.')[1]] = message.split('. ')[1]));

      await this.setState({ submitting: false, errors });
    }
  };

  renderError = key =>
    this.state.errors[key] && (
      <ErrorContainer>
        <ErrorMessage>> {this.state.errors[key]}</ErrorMessage>
      </ErrorContainer>
    );

  render = () => {
    let name = localStorage.getItem('name');

    if (name) {
      return (
        <>
          <SuccessByline>Thanks for signing up,</SuccessByline>
          <SubmitHeader>{name}</SubmitHeader>
          <SuccessMessage>
            We will be reviewing your application to this bootcamp and
            <br />
            we will reach out to you for further instructions if
            <br />
            you're selected.
          </SuccessMessage>
          <SignupAgainBtn onClick={() => localStorage.removeItem('name')}>Sign up another candidate</SignupAgainBtn>
        </>
      );
    }

    return this.state.submitting ? (
      <SubmitHeader>Submitting application..</SubmitHeader>
    ) : (
      <Container>
        <form onSubmit={this.submit}>
          <Label>
            Fullname
            <FormInput
              placeholder="Juan Dela Cruz"
              onChange={e => this.setState({ fullname: e.target.value })}
              value={this.state.fullname}
              required
            />
          </Label>
          {this.renderError('full_name')}
          <Label>
            Contact No.
            <FormInput
              placeholder="09xx-xxx-xxxx"
              onChange={e => this.setState({ contactNo: e.target.value })}
              value={this.state.contactNo}
              required
            />
          </Label>
          {this.renderError('phone')}
          <Label>
            Email
            <FormInput
              required
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              placeholder="juandelacruz@gmail.com"
              type="email"
            />
          </Label>
          {this.renderError('email')}
          <Label>
            Why should you be accepted in FullStack?
            <Textarea
              rows={2}
              required
              onChange={e => this.setState({ intro: e.target.value })}
              value={this.state.intro}
              placeholder="Uhhh.. I'm a butterfly?"
            />
          </Label>
          {this.renderError('intro')}
          <Label>
            What Operating System are you using?
            <Select
              onChange={e => this.setState({ operatingSystem: e.target.value })}
              value={this.state.operatingSystem}
            >
              <option value="linux">Any Linux Distro</option>
              <option value="osx">Mac OSX</option>
              <option value="windows">Windows</option>
            </Select>
          </Label>
          {this.renderError('os')}
          <Label>
            Educational Attainment
            <Select onChange={e => this.setState({ experience: e.target.value })} value={this.state.experience}>
              <option value="no_degree_with_exp">No degree, but with technical experience</option>
              <option value="associate_degree">Associate Degree</option>
              <option value="bachelor_degree">Bachelor's Degree</option>
              <option value="master_degree">Master's Degree</option>
            </Select>
          </Label>
          {this.renderError('experience')}
          <Input type="submit" />
        </form>
      </Container>
    );
  };
}

export default Form;
