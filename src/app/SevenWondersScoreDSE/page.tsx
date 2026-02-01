const headerStyles = {
  marginTop: 15,
  color: "#E0A731",
};

export default function SevenWondersScoreDSEPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1 style={headerStyles}>Datenschutzerklärung</h1>

      <h2 style={headerStyles}>1. Datenschutz auf einen Blick</h2>
      <p>
        <strong>Allgemeine Hinweise</strong> Diese Datenschutzerklärung
        informiert Sie darüber, wie Ihre personenbezogenen Daten in dieser App
        (7 Wonders Score Calculator) verarbeitet werden. Die wichtigste
        Information vorab: Ihre Daten gehören Ihnen.
      </p>
      <p>
        <strong>Datenerfassung in dieser App</strong> Die App erfasst
        Player-Namen und Spielergebnisse, um eine Spielhistorie und Statistiken
        zu erstellen.
      </p>

      <h2 style={headerStyles}>
        2. Lokale Speicherung (Keine Cloud-Übertragung)
      </h2>
      <p>
        Alle Daten, die Sie in dieser App eingeben (z. B. Spielernamen,
        Spielstände, gewählte Erweiterungen), werden ausschließlich lokal auf
        Ihrem Endgerät gespeichert.
      </p>
      <p>Es findet keine Übertragung an externe Server statt.</p>
      <p>Es gibt keine Cloud-Synchronisation.</p>
      <p>
        Es werden keine Analysetools verwendet, die Ihr Nutzerverhalten tracken.
      </p>

      <h2 style={headerStyles}>3. Arten der verarbeiteten Daten</h2>
      <p>Im Rahmen der App-Nutzung werden folgende Daten lokal gespeichert:</p>
      <p>
        <strong>Spieler-Daten:</strong> Namen der von Ihnen angelegten Spieler.
      </p>
      <p>
        <strong>Spiel-Daten:</strong> Erzielte Punkte pro Kategorie, Datum des
        Spiels, verwendete Erweiterungen und das Endergebnis.
      </p>
      <p>
        <strong>Einstellungen:</strong> Ihre Sprachwahl (Deutsch/Englisch).
      </p>

      <h2 style={headerStyles}>4. Rechtsgrundlage</h2>
      <p>
        Die Verarbeitung der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
        b DSGVO (Erfüllung eines Vertrages bzw. Bereitstellung der App-Funktion)
        sowie in Ihrem berechtigten Interesse, eine lokale Spielhistorie zu
        führen.
      </p>

      <h2 style={headerStyles}>5. Speicherdauer und Löschung</h2>
      <p>
        Da die Daten lokal gespeichert werden, haben Sie die volle Kontrolle:
      </p>
      <p>Sie können einzelne Spieler oder Spiele direkt in der App löschen.</p>
      <p>
        Wenn Sie die App deinstallieren, werden alle lokal gespeicherten Daten
        durch das Betriebssystem Ihres Smartphones automatisch gelöscht.
      </p>

      <h2 style={headerStyles}>6. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft über Ihre gespeicherten Daten sowie ein
        Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Da die
        Daten jedoch nur lokal auf Ihrem Handy liegen und wir (die Entwickler)
        keinen Zugriff darauf haben, können Sie diese Rechte am einfachsten
        selbst durch das Bearbeiten oder Löschen der Daten innerhalb der App
        ausüben.
      </p>

      <h2 style={headerStyles}>7. Kontakt</h2>
      <p>
        Bei Fragen zu dieser Datenschutzerklärung können Sie sich an den
        Entwickler wenden:
      </p>
      <p>martin.loidolt04@gmail.com</p>
    </div>
  );
}
