using System.ServiceModel;

namespace WcfService2
{
    [ServiceContract]
    public interface IService1
    {
        [OperationContract]
        double Sumar(double a, double b);

        [OperationContract]
        double Restar(double a, double b);

        [OperationContract]
        double Multiplicar(double a, double b);

        [OperationContract]
        double Dividir(double a, double b);

        [OperationContract]
        double Potencia(double a, double b);

        [OperationContract]
        double Modulo(double a, double b);
    }
}
