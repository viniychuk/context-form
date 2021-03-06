import Form from './Form/Form';
import Field from './FormField/Field';
import FieldInput from './FormField/FieldInput';
import FieldArray from './FormField/FieldArray';
import FormFooter from './FormFooter/FormFooter';
import ContextFormInstanceContext, { withContextFormInstanceConsumer } from './Context/ContextFormInstanceContext';
import FieldArrayContext from './Context/FieldArrayContext';
import ContextFormContext, { withContextForm } from './Context/ContextFormContext';
import ContextFormProvider from './Context/ContextFormProvider';

import FieldArrayAdd from './FormField/FieldArrayAdd';
import FieldArrayRemove from './FormField/FieldArrayRemove';
import FieldArrayIndex from './FormField/FieldArrayIndex';

import SimpleTheme from './Theme/SimpleTheme/SimpleTheme';

import { humanizeName } from './utils';

FieldArray.Add    = FieldArrayAdd;
FieldArray.Remove = FieldArrayRemove;
FieldArray.Index  = FieldArrayIndex;

Field.Input = FieldInput;

Form.Field      = Field;
Form.FieldArray = FieldArray;

export default Form;

const FormContext = ContextFormInstanceContext;

export {
  Form,
  Field,
  FieldInput,
  FieldArray,
  FormFooter,
  ContextFormProvider,
  FieldArrayAdd,
  FieldArrayRemove,
  ContextFormContext,
  ContextFormInstanceContext,
  FormContext,
  FieldArrayContext,
  SimpleTheme,
  humanizeName,
  withContextForm,
  withContextFormInstanceConsumer,
};
