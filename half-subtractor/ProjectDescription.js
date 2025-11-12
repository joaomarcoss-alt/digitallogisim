`timescale 1ns/1ps

module tb_half_subtractor;

reg X, Y;          // Entradas de teste
wire D, B;         // Saídas

// Instanciando o módulo Half-Subtractor
half_subtractor hs (
    .X(X),
    .Y(Y),
    .D(D),
    .B(B)
);

// Gerando dump para GTKWave
initial begin
    $dumpfile("dump.vcd");
    $dumpvars(0, tb_half_subtractor);
end

// Testando todas as combinações de entradas
initial begin
    $display("X Y | D B");
    $display("---------");

    X=0; Y=0; #10 $display("%b %b | %b %b", X,Y,D,B);
    X=0; Y=1; #10 $display("%b %b | %b %b", X,Y,D,B);
    X=1; Y=0; #10 $display("%b %b | %b %b", X,Y,D,B);
    X=1; Y=1; #10 $display("%b %b | %b %b", X,Y,D,B);

    $finish;
end

endmodule
