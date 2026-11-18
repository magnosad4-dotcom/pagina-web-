// creating an array and passing the number, questions, options, and answers
const programacion_02 = [
    {
        numb: 1,
        question: "¿Qué estructura de datos permite acceder directamente a un elemento por su índice?",
        answer: "Arreglo",
        options: ["Lista enlazada", "Arreglo", "Pila", "Cola"]
    },
    {
        numb: 2,
        question: "¿Cuál es la complejidad temporal de la búsqueda binaria en el caso promedio?",
        answer: "O(log n)",
        options: ["O(n)", "O(n²)", "O(log n)", "O(1)"]
    },
    {
        numb: 3,
        question: "¿Qué tipo de árbol mantiene sus elementos ordenados para facilitar la búsqueda?",
        answer: "Árbol binario de búsqueda",
        options: ["Árbol binario de búsqueda", "Árbol de expresión", "Árbol genealógico", "Árbol de decisión"]
    },
    {
        numb: 4,
        question: "¿Qué recorrido de un árbol visita primero la raíz, luego el subárbol izquierdo y después el derecho?",
        answer: "Preorden",
        options: ["Inorden", "Preorden", "Postorden", "Por niveles"]
    },
    {
        numb: 5,
        question: "¿Qué es la recursividad?",
        answer: "Una función que se llama a sí misma",
        options: ["Una función que se ejecuta una sola vez", "Una función que se llama a sí misma", "Una función sin parámetros", "Una función que devuelve void"]
    },
    {
        numb: 6,
        question: "¿Qué evita el caso base en una función recursiva?",
        answer: "Recursión infinita",
        options: ["Recursión infinita", "Errores de compilación", "Uso excesivo de memoria global", "Sobrecarga de funciones"]
    },
    {
        numb: 7,
        question: "¿Qué almacena cada nodo de una lista enlazada simple?",
        answer: "Un dato y un puntero al siguiente nodo",
        options: ["Dos datos y ningún puntero", "Un dato y un puntero al siguiente nodo", "Solo punteros", "Un índice numérico"]
    },
    {
        numb: 8,
        question: "¿Qué pilar de la POO oculta los detalles internos de una clase?",
        answer: "Encapsulamiento",
        options: ["Herencia", "Polimorfismo", "Encapsulamiento", "Abstracción de bucles"]
    },
    {
        numb: 9,
        question: "¿Qué palabra clave en C++ permite que un método sea redefinido en una clase derivada?",
        answer: "virtual",
        options: ["static", "virtual", "const", "friend"]
    },
    {
        numb: 10,
        question: "¿Qué algoritmo de ordenamiento usa un pivote para dividir el arreglo?",
        answer: "Quicksort",
        options: ["Burbuja", "Selección", "Quicksort", "Inserción"]
    },
    {
        numb: 11,
        question: "¿Cuál es la complejidad temporal promedio de Quicksort?",
        answer: "O(n log n)",
        options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"]
    },
    {
        numb: 12,
        question: "¿Qué algoritmo encuentra el camino más corto desde un nodo origen en un grafo con pesos positivos?",
        answer: "Dijkstra",
        options: ["Prim", "Kruskal", "Dijkstra", "Floyd-Warshall solo para ciclos"]
    },
    {
        numb: 13,
        question: "¿Qué valor representa un puntero que no apunta a ninguna dirección válida en C++ moderno?",
        answer: "nullptr",
        options: ["NULL vacío", "nullptr", "void", "undefined"]
    },
    {
        numb: 14,
        question: "¿Qué recorrido de grafo utiliza una cola para explorar los nodos por niveles?",
        answer: "BFS (búsqueda en anchura)",
        options: ["DFS (búsqueda en profundidad)", "BFS (búsqueda en anchura)", "Búsqueda binaria", "Recorrido de Euler"]
    },
    {
        numb: 15,
        question: "¿Qué recorrido de grafo explora tan profundo como sea posible antes de retroceder?",
        answer: "DFS (búsqueda en profundidad)",
        options: ["BFS (búsqueda en anchura)", "DFS (búsqueda en profundidad)", "Dijkstra", "Kruskal"]
    },
    {
        numb: 16,
        question: "¿Qué significa polimorfismo?",
        answer: "Un mismo método se comporta de forma distinta según el objeto",
        options: ["Una clase hereda de varias clases", "Un mismo método se comporta de forma distinta según el objeto", "Un objeto no tiene atributos", "Una clase no puede tener métodos"]
    },
    {
        numb: 17,
        question: "¿Qué operador de C++ reserva memoria dinámica?",
        answer: "new",
        options: ["malloc", "alloc", "new", "create"]
    },
    {
        numb: 18,
        question: "¿Qué operador de C++ libera la memoria dinámica reservada con new?",
        answer: "delete",
        options: ["free", "delete", "remove", "clear"]
    },
    {
        numb: 19,
        question: "¿Qué estructura de árbol se mantiene balanceada mediante factores de equilibrio y rotaciones?",
        answer: "Árbol AVL",
        options: ["Árbol AVL", "Árbol de Huffman", "Trie", "Árbol de expresión"]
    },
    {
        numb: 20,
        question: "¿Cuál es la complejidad de acceder a un elemento por su posición en una lista enlazada?",
        answer: "O(n)",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"]
    },
    {
        numb: 21,
        question: "¿Qué es una clase abstracta?",
        answer: "Una clase que no puede instanciarse directamente",
        options: ["Una clase sin métodos", "Una clase que no puede instanciarse directamente", "Una clase sin atributos privados", "Una clase que solo tiene constructores"]
    },
    {
        numb: 22,
        question: "¿Qué tipo de lista permite recorrer los nodos en ambos sentidos?",
        answer: "Lista doblemente enlazada",
        options: ["Lista circular simple", "Lista doblemente enlazada", "Lista estática", "Lista simple"]
    },
    {
        numb: 23,
        question: "¿Qué estructura ofrece, en promedio, búsqueda en tiempo O(1)?",
        answer: "Tabla hash",
        options: ["Lista enlazada", "Tabla hash", "Árbol binario", "Arreglo desordenado"]
    },
    {
        numb: 24,
        question: "¿Qué es un destructor en una clase?",
        answer: "Un método que libera recursos cuando el objeto se destruye",
        options: ["Un método que crea el objeto", "Un método que libera recursos cuando el objeto se destruye", "Un método que copia el objeto", "Un método que suma atributos"]
    },
    {
        numb: 25,
        question: "¿Qué algoritmo de ordenamiento compara repetidamente pares de elementos adyacentes e intercambia los que estén desordenados?",
        answer: "Burbuja",
        options: ["Burbuja", "Mezcla", "Montículo", "Inserción binaria"]
    }
];