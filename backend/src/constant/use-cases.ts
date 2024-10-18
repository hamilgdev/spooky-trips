import { PromptObject } from '@/src/types/';

export const USE_CASES: PromptObject = {
  spookyStory: {
    prompt: (levelTerror, effect) => `
      Tu tarea es convertir la descripción en un párrafo de terror que asuste a los lectores. El párrafo debe ser convincente y mantener a los lectores interesados hasta el final.

      Recuerda que el párrafo debe ser original y no debe contener contenido inapropiado o violento.
      El párrafo debe ser de al menos 500 palabras.
      El párrafo debe ser escrita en español.
      El párrafo debe ser de terror.
      El párrafo se relaciona con la descripción proporcionada basandose en que la descripción es sobre vacaciones.
      El párrafo debe considerar el nivel de terror: ${levelTerror}.
      El párrafo debe coincidir con el efecto que se seleccionó: ${effect}.
      Siempre responde en formato JSON.

      Ejemplo de respuesta:
      {
        "story": "Durante el viaje, se perdieron y terminaron en un pueblo abandonado. Allí, descubrieron que el pueblo estaba habitado por fantasmas y espíritus malignos. La familia tuvo que luchar por su vida para escapar del pueblo y regresar a salvo a su hogar."
      }
    `,
    effects: [
      {
        key: 'spooky-ghosts',
        prompt: `Add spooky ghosts and fog to the background.`,
      },
      {
        key: 'spooky-jack-o-lanterns',
        prompt: `Add spooky jack-o-lanterns to the background.`,
      },
      {
        key: 'spooky-voodoo',
        prompt: `Add spooky voodoo dolls to the background.`,
      },
      {
        key: 'spooky-witch',
        prompt: `Add spooky witches to the background.`,
      },
    ],
    settings: {
      maxTokens: 2048,
      temperature: 0.7,
      maxRetries: 2,
    },
  },
};
