AOS.init();

const DataDoEvento = new Date("Dec 28, 2024 11:00:00");
const timeStampDoEvento = DataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const DistAteOEvento = timeStampDoEvento - timeStampAtual;

    const DiasEmMs = 1000 * 60 * 60 * 24;
    const HoraEmMs = 1000 * 60 * 60;
    const MinutoEmMs = 1000 * 60;

    const DiasAteOEvento = Math.floor(DistAteOEvento / DiasEmMs);
    const HorasAteOEvento = Math.floor((DistAteOEvento % DiasEmMs) / HoraEmMs);       
    const MinutosAteOEvento = Math.floor((DistAteOEvento % HoraEmMs) / MinutoEmMs);
    const SegundosAteOEvento = Math.floor((DistAteOEvento % MinutoEmMs) / 1000);
    document.getElementById('contador').innerHTML = `${DiasAteOEvento}d ${HorasAteOEvento}h ${MinutosAteOEvento}m ${SegundosAteOEvento}s`;

    if(DistAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Chegaste tarde, agora so na Netflix'
    }
}, 1000)