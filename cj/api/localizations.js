import { cmsBaseUrl } from '../config';

export const localizationById = async (id) => {
    try {
        // Parses the JSON returned by a network request
        const parseJSON = resp => (resp.json ? resp.json() : resp);
        // Checks if a network request came back fine, and throws an error if not
        const checkStatus = resp => {
            if (resp.status === 404) {
                throw "Not found";
            }

            if (resp.status >= 200 && resp.status < 300) {
                return resp;
            }

            return parseJSON(resp).then(resp => {
                throw resp;
            });
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        const localisation = await fetch(`${cmsBaseUrl}/localizations/${id}`, {
            method: 'GET',
            headers,
        })
            .then(checkStatus)
            .then(parseJSON);

        return { localisation };
    } catch (error) {
        return { error };
    }
};
