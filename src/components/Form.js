import React from 'react';
import styled from '@emotion/styled';
import { rhythm, scale } from '../utils/typography';

const Container = styled.div`
  position: fixed;
  top: 45px;
  bottom: 0;
  right: 0;
  width: 50vw;
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

const FormInput = props => <Input {...props} autoComplete="disabled" />;

export default () => (
  <Container>
    <form>
      <Label>
        Fullname
        <FormInput placeholder="Juan Dela Cruz" required />
      </Label>
      <Label>
        Contact No.
        <FormInput required />
      </Label>
      <Label>
        Email
        <FormInput required />
      </Label>
      <Label>
        Why should you be accepted in FullStack?
        <Textarea rows={2} required />
      </Label>
      <Label>
        Operating System?
        <FormInput />
      </Label>
      <Label>
        <FormInput type="file" />
        <FileLabel>Attach CV</FileLabel>
      </Label>
      <Input type="submit" />
    </form>
  </Container>
);
