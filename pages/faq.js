import { useEffect, useState } from 'react'
import Link from '../src/components/Link'

export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
                    .then(response => response.json())
                    .then(response => response)
    return {
        props: {
            faq
        }
    }
}

export default function FAQpage({ faq }) {
    return (
        <div>
            <h1>Alura Cases - FAQ</h1>
            <Link href="/">Homepage</Link>
            <ul>
                {faq.map(({ answer, question}) => (
                    <li key={question}>
                        <h2>{question}</h2>
                        <p>{answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}