using System;
using System.ServiceModel;

namespace WcfService2
{
    public class Service1 : IService1
    {
        public double Sumar(double a, double b)
        {
            return a + b;
        }

        public double Restar(double a, double b)
        {
            return a - b;
        }

        public double Multiplicar(double a, double b)
        {
            return a * b;
        }

        public double Dividir(double a, double b)
        {
            if (b == 0)
                throw new FaultException("No se puede dividir entre cero.");
            return a / b;
        }

        public double Potencia(double a, double b)
        {
            return Math.Pow(a, b);
        }

        public double Modulo(double a, double b)
        {
            if (b == 0)
                throw new FaultException("No se puede calcular el módulo con divisor cero.");
            return a % b;
        }
    }
}
