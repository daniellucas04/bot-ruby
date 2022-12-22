const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageButton } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('arquiteturas')
        .setDescription('Vamos conhecer um pouco sobre as arquiteturas mais famosas!'),

    async execute(interaction) {
        const architectureEmbed1 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Arquiteturas')
            .setDescription('Vamos introduzir os princípios básicos da rede para iniciantes. Rede é um tópico enorme, então isso será apenas uma breve visão geral.')
            .addFields(
                {
                    name: 'Tópicos que vamos abordar',
                    value: '~ Modelo OSI.\n\
                            ~ Modelo TCP/IP.\n\
                            ~ Como esses modelos funcionam na prática.',
                },
            )
            .setTimestamp();

        const architectureEmbed2 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Modelo RM-OSI')
            .setDescription("O modelo OSI (Open Systems Interconnection) é um modelo **padronizado** que usamos para demonstrar a **teoria** por trás das redes de computadores.\n\
                             Na prática, é o modelo **TCP/IP** mais compacto no qual a rede do **mundo real se baseia**; no entanto, o modelo OSI, em muitos aspectos, é mais **fácil de obter uma compreensão inicial**.\n\n\
                             **O modelo OSI consiste em sete camadas**")
            .setImage('https://i.imgur.com/5Sd4R7t.png')
            .setTimestamp();

        const architectureEmbed3 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Camadas do Modelo OSI')
            .setDescription('Existem várias formas para ajudá-lo a memorizar as camadas do modelo OSI - sinta-se a vontade para pesquisar e encontrar uma que goste.')
            .addFields(
                {
                    name: '> Aplicação',
                    value: 'A camada de aplicação do modelo OSI essencialmente **fornece opções de rede para programas executados em um computador**. Funciona **quase exclusivamente com aplicativos**, fornecendo uma interface para eles usarem para **transmitir dados**. Quando os dados são fornecidos à camada de aplicação, eles são passados para a camada de **apresentação**.'
                },
                {
                    name: '> Apresentação',
                    value: 'A camada de apresentação recebe dados da camada de **aplicação**. Esses dados tendem a estar em um formato que o **aplicativo entenda**, mas **não necessariamente em um formato padronizado** que possa ser entendido pela camada do aplicativo no computador receptor. A camada de apresentação traduz os dados em um **formato padronizado**, além de lidar com **qualquer criptografia, compactação ou outras transformações** nos dados. Com isso concluído, os dados são passados para a camada de **sessão**.'
                },
                {
                    name: '> Sessão',
                    value: 'Quando a camada de sessão recebe os dados formatados corretamente da camada de apresentação, ela **verifica se pode estabelecer uma conexão com o outro computador pela rede**. Se não puder, ele envia de volta um **erro e o processo não avança**. Se uma sessão pode ser estabelecida, é tarefa da camada de sessão **mantê-la**, bem como cooperar com a camada de sessão do computador remoto para **sincronizar as comunicações**.\n\
                            A camada de sessão é **particularmente importante**, pois a sessão que ela cria é exclusiva da comunicação em questão. Isso é o que permite que você faça **várias solicitações para diferentes endpoints simultaneamente sem que todos os dados sejam misturados**.\n\
                            Quando a camada de sessão estabeleceu com sucesso uma conexão entre o host e o computador remoto, os dados são passados para a camada de **transporte**.'
                }
            )
            .setTimestamp();

        const architectureEmbed4 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Camadas do Modelo OSI - 2')
            .setDescription('> Transporte\nSeu primeiro objetivo é escolher o **protocolo pelo qual os dados serão transmitidos**. Os dois protocolos mais comuns nesta camada são **TCP (Transmission Control Protocol) e UDP (User Datagram Protocol)**')
            .addFields(
                {
                    name: 'TCP',
                    value: 'Em TCP, a transmissão é **baseada em conexão**, o que significa que uma conexão entre os computadores é **estabelecida e mantida durante a solicitação**.\
                            Isso permite uma transmissão **confiável**, pois a conexão pode ser usada para garantir que todos os pacotes **cheguem ao lugar certo**.\
                            Uma conexão TCP permite que os dois computadores **permaneçam em comunicação constante** para garantir que os dados sejam enviados a uma **velocidade aceitável** e que os dados perdidos sejam **reenviados**.'
                },
                {
                    name: 'UDP',
                    value: 'Com UDP, acontece o oposto. Pacotes de dados são **essencialmente lançados no computador receptor - se ele não conseguir acompanhar, o problema é dele**.\
                            Então, o TCP geralmente seria escolhido para situações em que a precisão é favorecida em relação à velocidade, como uma **transferência de arquivos** por exemplo.\n\
                            E o UDP seria usado em situações em que a **velocidade é mais importante**, por exemplo streaming de vídeo.'
                }
            )

        const architectureEmbed5 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Camadas do Modelo OSI - 3')
            .addFields(
                {
                    name: '> Rede',
                    value: "A camada de rede é responsável por **localizar o destino de sua solicitação**. Por exemplo, a Internet é uma rede enorme; quando você deseja solicitar informações de uma página da Web, é a camada de rede que obtém o endereço IP da página e descobre o **melhor caminho a seguir**.\n\
                            Neste estágio, estamos trabalhando com o que é chamado de **endereçamento lógico** (ou seja, endereços IP) que ainda são controlados por software. Os endereços lógicos são usados para **ordenar as redes**, categorizando-as e permitindo classificá-las adequadamente.\
                            Atualmente, a forma mais comum de endereçamento lógico é o formato **IPV4**."
                },
                {
                    name: '> Enlace',
                    value: "A camada de enlace concentra-se no **endereçamento físico da transmissão**.\
                            Ele recebe um pacote da camada de rede (que inclui o IP do computador remoto) e adiciona o **endereço físico (MAC)** do terminal receptor.\n\
                            Além disso, também é tarefa da camada de enlace apresentar os dados em um **formato adequado para transmissão**.\
                            A camada de enlace também cumpre uma função importante quando recebe dados, pois **verifica as informações recebidas** para garantir que não foram corrompidas durante a transmissão, o que pode acontecer quando os dados são transmitidos pela camada 1: a camada física."
                },
                {
                    name: '> Física',
                    value: 'A camada física está diretamente relacionada ao **hardware do computador**. É aqui que os pulsos elétricos que compõem a transferência de dados em uma rede cabeada são **enviados e recebidos**.\
                            É o trabalho da camada física **converter os dados binários** da transmissão em **sinais** e transmiti-los pela rede, além de **receber os sinais de entrada e convertê-los de volta em dados binários**.'
                }
            )
            .setTimestamp();

        const architectureEmbed6 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Encapsulamento')
            .setDescription('À medida que os dados são passados para cada camada do modelo, mais informações contendo **detalhes específicos** da camada em questão são adicionadas ao início da transmissão.\
                             Por exemplo, o cabeçalho adicionado pela Camada de Rede incluiria coisas como os **IP de origem e destino**, e o cabeçalho adicionado pela Camada de Transporte incluiria (entre outras coisas) **informações específicas do protocolo que está sendo usado**.')
            .setTimestamp();

        const architectureEmbed7 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Encapsulamento - 2')
            .setDescription('A camada de enlace também adiciona uma peça no final da transmissão, que é usada para **verificar se os dados não foram corrompidos na transmissão**; isso também tem o bônus adicional de **maior segurança**, pois os dados **não podem ser interceptados e adulterados**.\n\n\
                             **Todo esse processo é chamado de encapsulamento; o processo pelo qual os dados podem ser enviados de um computador para outro**.')
            .setTimestamp();

        const architectureEmbed8 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Encapsulamento - 3')
            .setDescription('Os dados encapsulados recebem um nome diferente em diferentes **etapas do processo**. Nas camadas 7, 6 e 5, os dados são simplesmente referidos como **dados**.\n\n\
                             Na camada de transporte, os **dados encapsulados** são chamados de **segmento ou datagrama**.\n\n\
                             Na camada de rede, os dados são chamados de **pacotes**. Quando o pacote é passado para a camada de enlace de dados, ele se torna um **quadro** e, no momento em que é transmitido pela rede, **o quadro foi dividido em bits**.')
            .setTimestamp();

        const architectureEmbed9 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Encapsulamento - 4')
            .setDescription('Quando a mensagem é recebida pelo segundo computador, ele inverte o processo – **começando na camada física e trabalhando até chegar à camada de aplicação**, retirando as informações adicionadas à medida que avança.\n\
                             Isto é referido como **desencapsulação**. Como tal, você pode pensar nas camadas do modelo OSI como **existentes dentro de cada computador com recursos de rede**.\
                             Embora não seja tão claro na **prática**, **todos os computadores seguem o mesmo processo de encapsulamento para enviar dados e desencapsulamento ao recebê-los**.')
            .setTimestamp();

        const architectureEmbed10 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Encapsulamento - 5')
            .setDescription('Os processos de encapsulamento e desencapsulamento são **muito importantes** - não apenas por causa de seu uso prático, mas também porque nos dão um método **padronizado de envio de dados**.\
                             Isso significa que todas as transmissões seguirão **consistentemente a mesma metodologia**, permitindo que qualquer dispositivo habilitado para rede envie uma solicitação para qualquer outro dispositivo acessível e tenha **certeza de que ela será compreendida**.')
            .setTimestamp();

        const architectureEmbed11 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Modelo TCP/IP')
            .setDescription('O modelo TCP/IP é, em muitos aspectos, muito semelhante ao modelo OSI. É alguns anos mais velho e serve como base para a rede do mundo real. O modelo TCP/IP consiste em quatro camadas: **Aplicação, Transporte, Internet e Interface de Rede**.\
                             Entre eles, eles cobrem a **mesma gama de funções que as sete camadas do Modelo OSI**.')
            .setImage('https://i.imgur.com/Rus8Gv7.png')
            .setTimestamp();

        const architectureEmbed12 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Modelo TCP/IP - 2')
            .setDescription('Veja o modelo OSI, ao lado do modelo TCP/IP')
            .setImage('https://i.imgur.com/29SQKtb.png')
            .setTimestamp();

        const architectureEmbed13 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Modelo TCP/IP - 3')
            .setDescription('O processo de encapsulamento e desencapsulamento do modelo TCP/IP **funciona exatamente da mesma forma do modelo OSI**.\
                             Em cada camada do modelo TCP/IP, um cabeçalho é **adicionado durante o encapsulamento e removido durante o desencapsulamento**.')
            .setImage('https://i.imgur.com/29SQKtb.png')
            .setTimestamp();

        const architectureEmbed14 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Modelo TCP/IP - 4')
            .setDescription('Um modelo em camadas é ótimo como auxílio visual - ele nos mostra o processo geral de como os dados podem ser encapsulados e enviados por uma rede, mas como isso **realmente acontece?**\n\
                             Quando falamos de TCP/IP, é bom pensar em uma tabela com quatro camadas, mas na verdade estamos falando de um **conjunto de protocolos**.\
                             TCP/IP leva o nome dos dois mais importantes deles: o **Transmission Control Protocol** que **controla o fluxo de dados** entre dois terminais, e o Internet Protocol, que controla como os pacotes são endereçados e enviado.')
            .setTimestamp();

        const architectureEmbed15 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Modelo TCP/IP - 5')
            .setDescription('o TCP é um protocolo baseado em conexão. Em outras palavras, antes de enviar qualquer dado via TCP, você deve primeiro formar uma **conexão estável** entre os dois computadores.\
                             O processo de formação dessa conexão é chamado de **handshake de três vias**.')
            .setTimestamp();

        const architectureEmbed16 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📗 Modelo TCP/IP - 6')
            .setDescription('Quando você tenta fazer uma conexão, seu computador primeiro envia uma solicitação especial ao servidor remoto indicando que deseja **inicializar uma conexão**.\
                             Essa solicitação contém algo chamado bit **SYN (abreviação de sincronização)**, que essencialmente faz o **primeiro contato** ao iniciar o processo de conexão. O servidor então responderá com um pacote contendo o bit SYN, bem como outro bit de **"reconhecimento"**, chamado **ACK**.\n\
                             Finalmente, seu computador enviará um pacote que contém o bit ACK por si só, **confirmando que a conexão foi configurada com sucesso**.\
                             Com o handshake de três vias concluído com êxito, os dados podem ser transmitidos de forma confiável entre os dois computadores. Quaisquer dados perdidos ou corrompidos na transmissão são **reenviados**, levando a uma conexão que parece não ter perdas.')
            .setFields(
                {
                    name: 'Referências',
                    value: 'TryHackMe. Disponível em <https://tryhackme.com/room/introtonetworking> Acesso em 16/06/2022\nTANENBAUM, Andrew S. Redes de Computadores. Rio de Janeiro: Elsevier, 2003.\n'
                }
            )
        
        const button1 = new MessageButton()
            .setCustomId('previousbtn')
            .setLabel('Página Anterior')
            .setStyle('DANGER');

        const button2 = new MessageButton()
            .setCustomId('nextbtn')
            .setLabel('Próxima página')
            .setStyle('SUCCESS');

        const pages = [architectureEmbed1, architectureEmbed2, architectureEmbed3, architectureEmbed4, architectureEmbed5, architectureEmbed6, architectureEmbed7, architectureEmbed8, architectureEmbed9, architectureEmbed10, architectureEmbed11, architectureEmbed12, architectureEmbed13, architectureEmbed14, architectureEmbed15, architectureEmbed16 ];
        const buttons = [button1, button2];
        const time = 1000 * 3600;

        paginationEmbed(interaction, pages, buttons, time);
    }
}