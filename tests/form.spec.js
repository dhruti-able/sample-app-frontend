import { render, screen, fireEvent } from '@testing-library/svelte';
import { get } from "svelte/store";

import Form from '../src/svelte/form.svelte';
import { reviewsApi } from '../src/svelte/api.js';

test('testing feedback form components :: inputs :: name, email, and review', async () => {
    render(Form);

    const nameInput = document.querySelector('#feedback-form-name');
    const emailInput = document.querySelector('#feedback-form-email');
    const reviewInput = document.querySelector('#feedback-form-review');

    expect(nameInput).toBeInTheDocument();
    expect(reviewInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
});

const newEntry = {
    "id": "3",
    "name": "test",
    "email": "test@gmail.com",
    "review": "test",
    "created_at": "2022-01-19 13:00:00"
};

test('testing feedback form components :: on submit method', async () => {
    render(Form);

    // set the input fields
    const nameInput = document.querySelector('#feedback-form-name');
    nameInput.setAttribute('value', 'test');
    
    const emailInput = document.querySelector('#feedback-form-email');
    emailInput.setAttribute('value', 'test@gmail.com');
    
    const reviewInput = document.querySelector('#feedback-form-review');
    reviewInput.setAttribute('value', 'test');
    
    // submit event
    const button = screen.getByText('Submit');
    expect(button).toBeInTheDocument();
    await fireEvent.submit(button);

    // fetch should be called once
    const spy = jest.spyOn(reviewsApi);
    expect(spy).toHaveBeenCalledTimes(1);
});
