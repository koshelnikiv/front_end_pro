import React, { useMemo } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  TextField as MuiTextField,
  Autocomplete,
  Stack,
} from '@mui/material';
import { TextField } from 'mui-rff';
import { fetchHotels } from '../hotels/hotelsSlice';



export default function BookingForm() {
  const dispatch = useDispatch();
  const destinations = useSelector((s) => s.destinations.items);

  const validate = (values) => {
    const errors = {};
    if (!values.destination) errors.destination = 'Required';
    if (!values.date) errors.date = 'Required';
    return errors;
  };

  const uniqueDestinations = useMemo(
    () =>
      destinations.filter(
        (item, index, self) =>
          index === self.findIndex((d) => d.label === item.label)
      ),
    [destinations]
  );

  return (
    <Form
      onSubmit={(v) =>
        dispatch(
          fetchHotels({
            destinationLabel: v.destination.label,
            /*destinationId: v.destination.id,*/
            date: v.date,
          })
        )
      }
      validate={validate}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            { }
            <Field name="destination">
              {({ input, meta }) => (
                <Autocomplete
                  {...input}
                  onChange={(_, val) => input.onChange(val)}
                  options={uniqueDestinations}
                  getOptionLabel={(o) => o.label || ''}
                  renderInput={(params) => (
                    <MuiTextField
                      {...params}
                      label="Destination"
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                />
              )}
            </Field>
            { }
            <TextField
              name="date"
              type="date"
              label="Date"
              InputLabelProps={{ shrink: true }}
            />
            <Button variant="contained" type="submit" disabled={submitting}>
              Send
            </Button>
          </Stack>
        </form>
      )}
    />
  );
}
