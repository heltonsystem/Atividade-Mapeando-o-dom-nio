## Quais as entidades de domínio?

- Produto | Product.ts
- Venda | Sale.ts
- Estoque | Stock.ts
- Cliente | Customer.ts
- Alerta | Alert.ts
- Fornecedor | Supplier.ts
- Ordem de Compra | PurchaseOrder.ts

## Quais as ações (casos de uso) que essa aplicação deve ter?

- Cadastrar Produto
  • Permitir o cadastro dos produtos com seus detalhes como tamanho e cor.

- Poder definir quantidades mínimas de estoque por produto
  • Definir uma quantidade mínima para cada produto e configurar alertas automáticos quando o estoque estiver abaixo desse limite.

- Rastrear Produto Individualmente
  • Permitir a identificação e rastreamento de cada produto por meio de um ID único, com opções para adicionar atributos como tamanho e cor.

- Realizar Venda
  • Permitir a realização de vendas dos produtos.

- Consulta histórico de vendas
  • Visualizar e gerar relatórios sobre vendas realizadas, lucro gerado por produto, produtos mais vendidos e tendências de estoque ao longo do tempo.

- Alertas quando estiver ficando sem um determinado produto.
  • Enviar alertas por e-mail e notificação no sistema quando a quantidade de um produto atingir o limite mínimo definido.

- Realizar pedidos de compra

- Integrar Sistema com Fornecedores
  • Integrar o sistema com fornecedores para receber atualizações automáticas sobre prazos de entrega de novas remessas e status das ordens de compra.
