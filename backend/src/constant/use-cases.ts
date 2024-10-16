import { PromptObject } from '@/src/types/';

export const USE_CASES: PromptObject = {
  spookyStory: {
    prompt: () => `
      Tu tarea es convertir la descripción en un párrafo de terror que asuste a los lectores. El párrafo debe ser convincente y mantener a los lectores interesados hasta el final.

      Recuerda que el párrafo debe ser original y no debe contener contenido inapropiado o violento.
      El párrafo debe ser de al menos 500 palabras.
      El párrafo debe ser escrita en español.
      El párrafo debe ser de terror.
      El párrafo se relaciona con la descripción proporcionada basandose en que la descripción es sobre vacaciones.
      Siempre responde en formato JSON.

      Ejemplo de respuesta:
      {
        "story": "Durante el viaje, se perdieron y terminaron en un pueblo abandonado. Allí, descubrieron que el pueblo estaba habitado por fantasmas y espíritus malignos. La familia tuvo que luchar por su vida para escapar del pueblo y regresar a salvo a su hogar."
      }
    `,
    settings: {
      maxTokens: 2048,
      temperature: 0.7,
      maxRetries: 2,
    },
  },
};
