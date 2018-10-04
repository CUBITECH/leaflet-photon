import * as L from 'leaflet';

declare module 'leaflet' {
    namespace Control {
        interface PhotonOptions {
          url?: string;
          placeholder?: string;
          noResultLabel?: string;
          minChar?: number;
          limit?: number;
          submitDelay?:number;
          includePosition:boolean;
          feedbackEmail?:string;
          feedbackLabel?:string;
          lang?:string;
          onSelected?: Function,
          formatResult?: Function,
          formatType?: Function,
          resultsHandler?: Function
        }
    }

    namespace control {
        /**
         * Creates a Leaflet.photon control
         */
        function photon(options?: Control.PhotonOptions): Control;
    }
}
