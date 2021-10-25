﻿using Abp.Application.Services;
using System.Threading.Tasks;

namespace Facturi.App
{
    public interface IReportGeneratorAppService : IApplicationService
    {
        byte[] GetByteDataFacture(FactureDto factureDto);
        byte[] GetByteDataDevis(DevisDto factureDto);
    }
}
