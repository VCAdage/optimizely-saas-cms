import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Define the type for the OpenAI API response
interface OpenAIResponse {
    choices: Array<{ text: string }>;
    usage: { total_tokens: number };
}

// Function to query OpenAI
async function queryOpenAI(prompt: string): Promise<string> {
    // Your OpenAI API key from environment variables
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        throw new Error('API key is missing. Please set OPENAI_API_KEY in your .env file.');
    }

    try {
        const response = await axios.post<OpenAIResponse>(
            'https://api.openai.com/v1/completions',
            {
                model: 'gpt-3.5-turbo-instruct', // or another model you wish to use
                prompt: prompt,
                max_tokens: 100
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        // Extract and return the text from the response
        return response.data.choices[0]?.text.trim() || 'No response text available';
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(`API request failed: ${error.response?.data.error.message || error.message}`);
        }
        throw error;
    }
}


export async function getSummary(results: string[]): Promise<string> {

    let prompt = 'Analyze the following paragraphs and write a summary. This summary should not exceed three sentences.  \n\n';

    prompt += results.join("\n");

    return queryOpenAI(prompt);
}

export { queryOpenAI };