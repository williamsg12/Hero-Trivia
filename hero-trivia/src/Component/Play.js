import React, { useState } from 'react';

const Play = () => {
    const[question,setquestion]=useState({})
    const questions = [
			{
				question: "What is the name of Superman's alter ego? ",
				choices: ['Clark Kent', 'Kal-el', 'Conner Kent', 'Jon Kent'],
				answer: 'Clark Kent',
			},
			{
				question: "What is the name of Thor's alter ego?",
				choices: [
					'Donald Blake',
					'Uhtred Ragnarson',
					'Olaf of Freljord',
					'Thor Laufeyson',
				],
				answer: 'Donald Blake',
			},
			{
				question: 'The quarter Anodite grandson of Maxwell Tennyson',
				choices: ['Kevin Levin', 'Ben Tennyson', 'Clyde Fyfe', 'Flash Gordon'],
				answer: 'Ben Tennyson',
			},
			{
				question: 'The name of the sword weilded by Eragon is ?',
				choices: ['Riptide', 'Inheretence', 'Brisingr', 'Murtagh'],
				answer: 'Brisingr',
			},
			{
				question: "Thor's hammer is named?",
				choices: ['Stormbreaker', 'Mjolnir', 'Laevatinn', 'Chidori'],
				answer: 'Mjolnir',
			},
			{
				question: "Superman's hometown of smallville is located in what state?",
				choices: ['Illinois', 'Ohio', 'Kansas', 'Wyoming'],
				answer: 'Kansas',
			},
			{
				question: 'The main character of the My hero Academia is  ?',
				choices: [
					'Peter Parker',
					'Toshinori Yagi',
					'Izuku Midoriya',
					'Light Yagami',
				],
				answer: 'Izuku Midoriya',
			},
			{
				question: 'Who is the only one that is not a Hero?',
				choices: [
					'Hal Jordan',
					'Carol Danvers',
					'Billy Batson',
					'Jonathan Crane',
				],
				answer: 'Jonathan Crane',
			},
			{
				question: 'Who was a sidekick to Batman?',
				choices: [
					'Cassandra Sandsmark',
					'Wally West',
					'Victor Stone',
					'Duke Thomas',
				],
				answer: 'Duke Thomas',
			},
			{
				question: 'Who is  a Hero?',
				choices: ['Wayton Jones', 'Cyrus Gold', 'David Hyde', 'Jaime Reyes'],
				answer: 'Jaime Reyes',
			},
		];


    return (
        <div>
            <h1 className='title'>Hero Trivia</h1>
            <button className='rules'>Rules</button>
            <button className='play'>Play</button>
            <button className='quit'>Quit</button>

        </div>
    );
};

export default Play;