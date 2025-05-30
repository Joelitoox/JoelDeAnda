using ClienteCalculadora.CalculadoraService; // Cambia esto si tu namespace es diferente
using System;

namespace ClienteCalculadora
{
    class Program
    {
        static void Main(string[] args)
        {
            Service1Client client = new Service1Client();

            double a = 10, b = 3;

            Console.WriteLine($"Suma: {client.Sumar(a, b)}");
            Console.WriteLine($"Resta: {client.Restar(a, b)}");
            Console.WriteLine($"Multiplicación: {client.Multiplicar(a, b)}");
            Console.WriteLine($"División: {client.Dividir(a, b)}");
            Console.WriteLine($"Potencia: {client.Potencia(a, b)}");
            Console.WriteLine($"Módulo: {client.Modulo(a, b)}");

            client.Close();

            Console.WriteLine("\nPresiona cualquier tecla para salir...");
            Console.ReadKey();
        }
    }
}

