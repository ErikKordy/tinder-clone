import { useState } from 'react'
import Nav from '../components/Nav'

const Onboarding = () => {

    const handleSubmit = () => {
        console.log('Submitted')
    }

    const handleChange = () => {
        console.log('Changed')
    }

    return (
        <>
            <Nav
                minimal={true}
                setShowModal={() => { }}
                showModal={false}
            />
            <div className='onboarding'>
                <h2>Create Account</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor='first-name'>First Name</label>
                        <input
                            id='first_name'
                            type='text'
                            name='first_name'
                            placeholder='First Name'
                            required={true}
                            value={""}
                            onChange={handleChange}
                        />
                        <label>Birthday</label>
                        <div className='multiple-input-container'>
                            <input
                                id='dob_day'
                                type='number'
                                name='dob_day'
                                placeholder='DD'
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                            <input
                                id='dob_month'
                                type='number'
                                name='dob_month'
                                placeholder='MM'
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                            <input
                                id='dob_year'
                                type='number'
                                name='dob_year'
                                placeholder='YY'
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                        </div>


                        <label>Gender</label>
                        <div className='multiple-input-container'>
                            <input
                                id='man-gender-identity'
                                type='radio'
                                name='gender_identity'
                                value="man"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor='man-gender-identity'>Man</label>
                            <input
                                id='woman-gender-identity'
                                type='radio'
                                name='gender_identity'
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor='woman-gender-identity'>Woman</label>
                            <input
                                id='more-gender-identity'
                                type='radio'
                                name='gender_identity'
                                value="more"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor='more-gender-identity'>More</label>
                        </div>
                        <label htmlFor='show-gender'>Show gender on my profile</label>
                        <input
                            id='show-gender'
                            type='checkbox'
                            name='show_gender'
                            onChange={handleChange}
                            checked={false}
                        />

                        <label>Show me</label>
                        <div className='multiple-input-container'>
                            <input
                                id='man-gender-interest'
                                type='radio'
                                name='gender_interest'
                                value="man"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor='man-gender-interest'>Man</label>
                            <input
                                id='woman-gender-interest'
                                type='radio'
                                name='gender_interest'
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor='woman-gender-interest'>Woman</label>
                            <input
                                id='more-gender-interest'
                                type='radio'
                                name='gender_interest'
                                value="everyone"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor='woman-gender-interest'>Everyone</label>
                        </div>
                        <label htmlFor='about'>About me</label>
                        <input
                            id='about'
                            type='text'
                            name='about'
                            value={""}
                            onChange={handleChange}
                            required={true}
                            placeholder='I like walks on the beach...'
                        />
                        <input type='submit' />
                    </section>
                    <section>
                        <label htmlFor='about'>Profile</label>
                            <input
                                type='url'
                                name='url'
                                id='url'
                                onChange={handleChange}
                                required={true}
                            />
                            <div className='photo-container'>
                        </div>
                    </section>
                </form>

            </div>
        </>
    )
}

export default Onboarding